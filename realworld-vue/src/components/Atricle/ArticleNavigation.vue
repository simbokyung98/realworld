<template>
  <div class="feed-toggle">
    <ul class="nav nav-pills outline-active">
      <template v-for="{ name, title } in links" :key="title">
        <li class="nav-item">
          <router-link to="" :class="['nav-link', { active: isActive(name) }]" @click="handleClick(name)">
            {{ title }}
          </router-link>
        </li>
      </template>
    </ul>
  </div>
</template>
<script setup>
import { ref, computed } from "vue";
import { useUserStore } from "@/store/user";
import { storeToRefs } from "pinia";
import { useArticles } from "@/composable/useArticles";

const { isLogined } = storeToRefs(useUserStore());
const { activeLabel, tag } = useArticles();

const props = defineProps({
  useGlobalFeed: Boolean,
  useMyFeed: Boolean,
  useTagFeed: Boolean,
  useUserFeed: Boolean,
  useUserFavorited: Boolean,
});

const articleNavOptions = ref([
  {
    name: "yourFeed",
    title: "Your Feed",
    display: props.useMyFeed && isLogined.value,
  },
  {
    name: "globalFeed",
    title: "Global Feed",
    display: props.useGlobalFeed,
  },
  {
    name: "tagFeed",
    title: "tag",
    display: props.useTagFeed && tag.value != null,
  },
  {
    name: "myArticles",
    title: "My Articles",
    display: props.useUserFeed,
  },
  {
    name: "favoritedArticles",
    title: "Favorited Articles",
    display: props.useUserFavorited,
  },
]);

const links = computed(() => articleNavOptions.value.filter((link) => link.display));

function handleClick(name) {
  if (tag.value != null && name != tag.value) tag.value = null;
  activeLabel.value = name;
}

function isActive(name) {
  return activeLabel.value == name;
}
</script>
