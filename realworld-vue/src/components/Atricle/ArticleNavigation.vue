<template>
  <div class="feed-toggle">
    <ul class="nav nav-pills outline-active">
      <template v-for="{ name, title } in links" :key="title">
        <li class="nav-item">
          <router-link to="" :class="['nav-link', { active: activeLabel == name }]" @click="handleClick(name)">
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

const { isLogined } = storeToRefs(useUserStore());

const props = defineProps({
  useGlobalFeed: Boolean,
  useMyFeed: Boolean,
  useTagFeed: Boolean,
  useUserFeed: Boolean,
  useUserFavorited: Boolean,
  tag: String,
  activeLabel: String,
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
    display: props.useTagFeed && props.tag != null,
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

const emit = defineEmits(["onChangeActiveLable"]);

function handleClick(name) {
  emit("onChangeActiveLable", name);
}
</script>
