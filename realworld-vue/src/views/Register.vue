<template>
  <div class="auth-page">
    <div class="container page">
      <div class="row">
        <div class="col-md-6 offset-md-3 col-xs-12">
          <h1 class="text-xs-center">Sign up</h1>
          <p class="text-xs-center">
            <a href="/login">Have an account?</a>
          </p>

          <ul class="error-messages">
            <li v-for="(values, key) in errors" :key="key">{{ key }} {{ values ? values[0] : "" }}</li>
          </ul>

          <form @submit.prevent="submitFrom">
            <fieldset class="form-group">
              <input class="form-control form-control-lg" type="text" placeholder="Username" v-model="form.username" />
            </fieldset>
            <fieldset class="form-group">
              <input class="form-control form-control-lg" type="text" placeholder="Email" v-model="form.email" />
            </fieldset>
            <fieldset class="form-group">
              <input class="form-control form-control-lg" type="password" placeholder="Password" v-model="form.password" />
            </fieldset>
            <button class="btn btn-lg btn-primary pull-xs-right" type="submit" :disabled="loadding">Sign up</button>
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

const router = useRouter();

const form = reactive({
  username: "",
  email: "",
  password: "",
});

const { addUser, loadding, errors, users } = useAuth();

const submitFrom = () => {
  addUser(form);
  if (users.value != null) {
    errors.value = null;
    router.push("/login");
  }
};
</script>
