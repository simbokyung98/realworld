<template>
  <!-- <ArticleNavigation v-bind="$attrs" @onChangeActiveLable="changeActiveLable" :tag="tag" :activeLabel="activeLabel" /> -->
  <div>{{ activeLabel }}</div>
  <ArticlePreview v-for="article in articles" :article="article" />
  <div class="article-preview" v-if="articles.length === 0">No articles are here... yet.</div>
  <ArticlePagination :page="page" :articlesCount="articlesCount" @onChangePage="changePage" />
</template>
<script setup>
// import ArticleNavigation from "@components/Atricle/ArticleNavigation.vue";
import ArticlePreview from "@components/Atricle/ArticlePreview.vue";
import ArticlePagination from "@components/Atricle/ArticlePagination.vue";
import { useArticles } from "@/composable/useArticles";

//articleList
const { page, articlesCount, changePage, requestArticles, articles, activeLabel } = useArticles();
await requestArticles();
</script>
