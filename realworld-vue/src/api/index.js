import axios from "axios";

axios.defaults.baseURL = import.meta.env.VITE_API_URL;

export const limit = 10;

export function getArticles(page) {
  const params = { limit: limit, offset: (page - 1) * limit };
  return axios.get("/articles", { params });
}

export function getTags() {
  return axios.get("/tags");
}

export function postRegisterForm(form) {
  const user = { email: form.email, password: form.password, username: form.username };
  return axios.post("/users", { user });
}

export function postLoginForm(form) {
  const user = { email: form.email, password: form.password };
  return axios.post("/users/login", { user });
}
