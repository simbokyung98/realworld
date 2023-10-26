import axios from "axios";

axios.defaults.baseURL = import.meta.env.VITE_API_URL;

axios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("jwtToken");

    if (token) {
      config.headers.Authorization = `Token ${token}`;
    }

    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export const limit = 10;

//article
export function getArticles(params) {
  return axios.get("/articles", { params });
}

export function getTags() {
  return axios.get("/tags");
}

//user
export function postRegisterForm(form) {
  const user = { email: form.email, password: form.password, username: form.username };
  return axios.post("/users", { user });
}

export function postLoginForm(form) {
  const user = { email: form.email, password: form.password };
  return axios.post("/users/login", { user });
}

export function getUser() {
  return axios.get("/user");
}
