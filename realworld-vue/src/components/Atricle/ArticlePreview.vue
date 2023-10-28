<template>
  <div class="article-preview">
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
</template>
<script setup>


const props = defineProps({
  article : {
    type : Object,
    default : () => {}
  }
})


</script>
