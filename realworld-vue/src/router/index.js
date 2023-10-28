import { createRouter, createWebHistory } from "vue-router";
import { useUserStore } from "../store/user";
import { storeToRefs } from "pinia";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: () => import("../views/Main.vue"),
      children: [
        {
          path: "/",
          component: () => import("../views/Articles/Home.vue"),
        },
        {
          path: "/login",
          component: () => import("../views/User/Login.vue"),
        },
        {
          path: "/register",
          component: () => import("../views/User/Register.vue"),
        },
      ],
    },
  ],
});

router.beforeEach(async (to) => {
  const store = useUserStore();
  const token = localStorage.getItem("jwtToken");

  const { userInfo, isLogined } = storeToRefs(store);
  const { getUserInfo } = useUserStore();

  if (isLogined.value) {
    if (!userInfo.value && token) {
      await getUserInfo();
      return true;
    }
  } else {
    return true;
  }
});
export default router;
