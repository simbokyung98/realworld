<template>
  <div v-for="article in articles" class="article-preview">
    <div class="article-meta">
      <a href="/profile/eric-simons"><img :src="article.author.image" /></a>
      <div class="info">
        <a href="/profile/eric-simons" class="author">{{ article.author.username }}</a>
        <span class="date">January 20th</span>
      </div>
      <button class="btn btn-outline-primary btn-sm pull-xs-right">
        <i class="ion-heart"></i> {{ article.favoritesCount }}
      </button>
    </div>
    <a href="/article/how-to-build-webapps-that-scale" class="preview-link">
      <h1>{{ article.title }}</h1>
      <p>{{ article.description }}</p>
      <span>Read more...</span>
      <ul class="tag-list" v-for="tag in article.tagList">
        <li class="tag-default tag-pill tag-outline">{{ tag }}</li>
      </ul>
    </a>
  </div>

  <ul class="pagination">
    <li v-for="p in pages" class="page-item" :class="[p == page ? 'active' : '']">
      <a class="page-link" @click="changePage(p)">{{ p }}</a>
    </li>
  </ul>
</template>
<script setup>
import { computed } from "vue";
import { useArticles } from "../../composable/useArticles";
import { useTags } from "../../composable/useTags";
import { limit } from "../../api";

//articleList
const { page, articles, articlesCount, changePage, requestArticles } = useArticles();
const pages = computed(() => Math.ceil(articlesCount.value / limit));
requestArticles();

//TagList
const { requestTags, tags } = useTags();
</script>
