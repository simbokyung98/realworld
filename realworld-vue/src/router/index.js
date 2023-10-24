import { createRouter, createWebHistory } from "vue-router";
import { useUserStore } from "../store/user";
import { storeToRefs } from "pinia";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: () => import("../views/Home.vue"),
    },
    {
      path: "/login",
      component: () => import("../views/Login.vue"),
    },
    {
      path: "/register",
      component: () => import("../views/Register.vue"),
    },
  ],
});

router.beforeEach((to, from) => {
  const store = useUserStore();
  const token = localStorage.getItem("jwt-token");

  const { isLogined, getUserInfo } = storeToRefs(store);

  if (isLogined.value) {
    return true;
  } else {
  }
});
export default router;
