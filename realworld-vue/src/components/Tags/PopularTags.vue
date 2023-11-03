<template>
  <div class="tag-list">
    <span v-for="t in tags" @click="onClick(t)" class="tag-pill tag-default">{{ t }}</span>
    <text v-if="tags.length === 0">No tags are here... yet.</text>
  </div>
</template>
<script setup>
import { useTags } from "@/composable/useTags";
import { useArticles } from "@/composable/useArticles";

//TagList
const { requestTags, tags } = useTags();
const { tag } = useArticles();

function onClick(t) {
  tag.value = t;
}

await requestTags();
</script>
