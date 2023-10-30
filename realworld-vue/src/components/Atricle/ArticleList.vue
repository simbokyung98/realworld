<template>
  <ArticleNavigation useGlobalFeed useMyFeed useTagFeed />
  <ArticlePreview v-for="article in articles" :article="article" />

  <ArticlePagination :page="page" :articlesCount="articlesCount" @pageChange="changePage" />
</template>
<script setup>
import ArticleNavigation from "@components/Atricle/ArticleNavigation.vue";
import ArticlePreview from "@components/Atricle/ArticlePreview.vue";
import ArticlePagination from "@components/Atricle/ArticlePagination.vue";
import { useArticles } from "@/composable/useArticles";

//articleList
const { articles, requestArticles, page, articlesCount, changePage } = useArticles();
requestArticles({});
</script>
