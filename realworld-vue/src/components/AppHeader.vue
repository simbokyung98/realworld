<template>
  <nav class="navbar navbar-light">
    <div class="container">
      <a class="navbar-brand" href="/">conduit</a>
      <ul class="nav navbar-nav pull-xs-right">
        <template v-for="{ path, title, display, pic, icon } in linkList" :key="title">
          <li v-if="display" class="nav-item">
            <router-link class="nav-link active" active-class="active" :to="path">
              <template v-if="icon"> <i :class="icon" />&nbsp; </template>
              <template v-if="pic">
                <img :src="pic" class="user-pic" />
              </template>
              {{ title }}
            </router-link>
          </li>
        </template>
      </ul>
    </div>
  </nav>
</template>

<script setup>
import { computed } from "vue";
import { useUserStore } from "@/store/user";
import { storeToRefs } from "pinia";

const { isLogined, userInfo } = storeToRefs(useUserStore());

const linkList = computed(() => [
  {
    path: "/",
    title: "Home",
    display: true,
  },
  {
    path: "/login",
    title: "Sign in",
    display: !isLogined.value,
  },
  {
    path: "/register",
    title: "Sign up",
    display: !isLogined.value,
  },
  {
    path: "/",
    title: "New Post",
    display: isLogined.value,
    icon: "ion-compose",
  },
  {
    path: "/",
    title: "Settings",
    display: isLogined.value,
    icon: "ion-gear-a",
  },
  {
    path: `/`,
    title: userInfo.value?.username,
    display: isLogined.value,
    pic: userInfo.value?.image,
  },
]);
</script>
