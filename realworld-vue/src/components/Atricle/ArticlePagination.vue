<template>

  <ul class="pagination">
    <li v-for="pageNumber in pages" class="page-item" :class="['page-item',{'active' : isActive(pageNumber)}]">
      <a class="page-link" @click="onPageChange(pageNumber)">{{ pageNumber }}</a>
    </li>
  </ul>
</template>
<script setup>

import { computed } from "vue";
import { limit } from "@/api";

const props = defineProps({
  page : {
    type : Number,
    default : 1
  },
  articlesCount : {
    type : Number,
    default : 10
  }

});
const emit = defineEmits(['pageChange']);


const pages = computed(() => Math.ceil(props.articlesCount / limit));

function onPageChange(pageNumber){
  emit('pageChange', pageNumber);
}

function isActive(pageNumber){
  return props.page == pageNumber;
}

</script>
