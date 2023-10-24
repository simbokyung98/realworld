<template>
  <div class="auth-page">
    <div class="container page">
      <div class="row">
        <div class="col-md-6 offset-md-3 col-xs-12">
          <h1 class="text-xs-center">Sign in</h1>
          <p class="text-xs-center">
            <router-link to="/register">Need an account?</router-link>
          </p>

          <ul class="error-messages">
            <li v-for="(values, key) in errors" :key="key">{{ key }} {{ values ? values[0] : "" }}</li>
          </ul>

          <form @submit.prevent="submitFrom">
            <fieldset class="form-group">
              <input class="form-control form-control-lg" type="text" placeholder="Email" v-model="form.email" />
            </fieldset>
            <fieldset class="form-group">
              <input class="form-control form-control-lg" type="password" placeholder="Password" v-model="form.password" />
            </fieldset>
            <button class="btn btn-lg btn-primary pull-xs-right" type="submit" :disabled="loadding">Sign in</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { reactive } from "vue";
import { useAuth } from "../composable/useAuth";
import { useRouter } from "vue-router";
import { useUserStore } from "../store/user";

const router = useRouter();

const form = reactive({
  email: "",
  password: "",
});

const { login, loadding, errors, users } = useAuth();
const { updateUser } = useUserStore();

const submitFrom = async () => {
  await login(form);

  if (users.value != null) {
    errors.value = null;
    updateUser(users.value);
    router.push("/");
  }
};
</script>
