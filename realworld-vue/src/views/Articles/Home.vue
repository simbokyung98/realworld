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
          <ArticleList />
        </div>

        <div class="col-md-3">
          <div class="sidebar">
            <p>Popular Tags</p>

            <div class="tag-list">
              <span v-for="t in tags" @click="onClick(t)" class="tag-pill tag-default">{{ t }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import ArticleList from "@components/Atricle/ArticleList.vue";
import { useTags } from "@/composable/useTags";
import { useArticles } from "@/composable/useArticles";

//TagList
const { tags } = useTags();
const { tag } = useArticles();

function onClick(t) {
  tag.value = t;
}
</script>
