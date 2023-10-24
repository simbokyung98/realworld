import { postRegisterForm, postLoginForm, getUser } from "../api";
import { ref } from "vue";
export function useAuth() {
  const loadding = ref(false);
  const errors = ref(null);
  const users = ref(null);

  async function addUser(form) {
    loadding.value = true;

    await postRegisterForm(form)
      .then((res) => (users.value = res))
      .catch((err) => (errors.value = err.response.data.errors));

    loadding.value = false;
  }

  async function login(form) {
    loadding.value = true;
    await postLoginForm(form)
      .then((res) => (users.value = res.data.user))
      .catch((err) => (errors.value = err.response.data.errors));
    loadding.value = false;
  }

  async function fetchUserInfo() {
    await getUser()
      .then((res) => (users.value = res.data.user))
      .catch((err) => (errors.value = err.response.data.errors));
  }

  return {
    addUser,
    login,
    fetchUserInfo,
    loadding,
    errors,
    users,
  };
}
