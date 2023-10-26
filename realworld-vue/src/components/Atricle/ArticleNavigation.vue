<template>
  <div class="feed-toggle">
    <ul class="nav nav-pills outline-active">
      <template v-for="{ title, display } in articleNavOptions" :key="title">
        <li v-if="display" class="nav-item">
          <router-link
            to=""
            class="nav-link"
            :class="[{ active: title === activeLabel }]"
            @click="handleClick(title)"
            >{{ title }}</router-link
          >
        </li>
      </template>
    </ul>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { useUserStore } from "@/store/user";
import { storeToRefs } from "pinia";

const { isLogined } = storeToRefs(useUserStore());

const activeLabel = ref(isLogined.value ? "Your Feed" : "Global Feed");

const articleNavOptions = ref([
  {
    title: "Your Feed",
    display: isLogined.value,
  },
  {
    title: "Global Feed",
    display: true,
  },
]);

function handleClick(title) {
  activeLabel.value = title;
}
</script>
