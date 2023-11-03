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
          <ArticleNavigation useGlobalFeed useMyFeed useTagFeed />

          <suspense>
            <template #default>
              <ArticleList />
            </template>
            <template #fallback> <div class="article-preview">Loading tags...</div> </template>
          </suspense>
        </div>

        <div class="col-md-3">
          <div class="sidebar">
            <p>Popular Tags</p>

            <suspense>
              <template #default>
                <PopularTags />
              </template>
              <template #fallback> Loading tags... </template>
            </suspense>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import ArticleNavigation from "@components/Atricle/ArticleNavigation.vue";
import ArticleList from "@components/Atricle/ArticleList.vue";
import PopularTags from "@components/Tags/PopularTags.vue";
</script>
