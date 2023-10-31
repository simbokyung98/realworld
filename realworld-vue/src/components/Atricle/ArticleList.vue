<template>
  <ArticleNavigation v-bind="$attrs" @onChangeActiveLable="changeActiveLable" :tag="tag" :activeLabel="activeLabel" />
  <ArticlePreview v-for="article in articles" :article="article" />

  <ArticlePagination :page="page" :articlesCount="articlesCount" @onChangePage="changePage" />
</template>
<script setup>
import ArticleNavigation from "@components/Atricle/ArticleNavigation.vue";
import ArticlePreview from "@components/Atricle/ArticlePreview.vue";
import ArticlePagination from "@components/Atricle/ArticlePagination.vue";
import { useArticles } from "@/composable/useArticles";

//articleList
const { page, tag, activeLabel, articles, articlesCount, changePage, changeActiveLable, requestArticles } =
  useArticles();
requestArticles();
</script>
