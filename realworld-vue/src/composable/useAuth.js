import { postRegisterFrom } from "../api";
import { ref } from "vue";
export function useAuth() {
  const loadding = ref(false);
  const errors = ref(null);
  const users = ref(null);

  async function addUser(from) {
    loadding.value = true;

    await postRegisterFrom(from)
      .then((res) => (users.value = res))
      .catch((err) => (errors.value = err.response.data.errors));
    console.log(users.value);

    loadding.value = false;
  }

  return {
    addUser,
    loadding,
    errors,
    users,
  };
}
