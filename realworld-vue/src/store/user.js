import { defineStore } from "pinia";
import { ref, computed } from "vue";
import { useAuth } from "../composable/useAuth";

const { users, fetchUserInfo } = useAuth();

export const useUserStore = defineStore("user", () => {
  const userInfo = ref(null);

  const isLogined = computed(() => {
    if (userInfo.value) return true;
    return localStorage.getItem("jwtToken") !== null;
  });

  function updateUser(newUser) {
    console.log("update", newUser);
    if (newUser) {
      userInfo.value = newUser;
      localStorage.setItem("jwtToken", newUser.token);
    } else {
      userInfo.value = null;
      localStorage.removeItem("jwtToken");
    }
  }

  async function getUserInfo() {
    await fetchUserInfo();
    if (users.value != null) {
      updateUser(users.value);
    }
  }

  return {
    userInfo,
    updateUser,
    isLogined,
    getUserInfo,
  };
});
