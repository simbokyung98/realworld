import { postRegisterForm, postLoginForm } from "../api";
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
    console.log(users.value);

    loadding.value = false;
  }

  async function login(form) {
    loadding.value = true;

    await postLoginForm(form)
      .then((res) => (users.value = res))
      .catch((err) => (errors.value = err.response.data.errors));

    loadding.value = false;
  }

  return {
    addUser,
    login,
    loadding,
    errors,
    users,
  };
}
