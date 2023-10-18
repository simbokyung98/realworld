<template>
 <div class="home-page">
  <div class="banner">
    <div class="container">
      <h1 class="logo-font">conduit</h1>
      <p>A place to share your knowledge.</p>
    </div>
  </div>

  <div class="container page">
    <div class="row">
      <div class="col-md-9">
        <div class="feed-toggle">
          <ul class="nav nav-pills outline-active">
            <li class="nav-item">
              <a class="nav-link" href="">Your Feed</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" href="">Global Feed</a>
            </li>
          </ul>
        </div>

        <div v-for="article in articles" class="article-preview">
          <div class="article-meta">
            <a href="/profile/eric-simons"><img :src="article.author.image" /></a>
            <div class="info">
              <a href="/profile/eric-simons" class="author">{{article.author.username }}</a>
              <span class="date">January 20th</span>
            </div>
            <button class="btn btn-outline-primary btn-sm pull-xs-right">
              <i class="ion-heart"></i> {{ article.favoritesCount }}
            </button>
          </div>
          <a href="/article/how-to-build-webapps-that-scale" class="preview-link">
            <h1>{{article.title}}</h1>
            <p>{{article.description  }}</p>
            <span>Read more...</span>
            <ul class="tag-list" v-for="tag in article.tagList">
              <li class="tag-default tag-pill tag-outline">{{ tag }}</li>
            </ul>
          </a>
        </div>

        <ul v-for="p in pages" class="pagination" >
          <li class="page-item" :class="[p==page?'active':'']">
            <a class="page-link" @click="changePage(p)">{{ p }}</a>
          </li>          
        </ul>
      </div>

      <div class="col-md-3">
        <div class="sidebar">
          <p>Popular Tags</p>

          <div class="tag-list">
            <a v-for="tag in tags"  href="" class="tag-pill tag-default">{{tag}}</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>
<script setup>
import {computed} from 'vue';
import {useArticles} from '../composable/useArticles';
import {useTags} from '../composable/useTags';
import { limit } from '../api';

//articleList
const  {page, articles, articlesCount, changePage, requestArticles} = useArticles();
const pages = computed(()=> Math.ceil(articlesCount.value/limit));
requestArticles();

//TagList
const {requestTags, tags} = useTags();




</script>
