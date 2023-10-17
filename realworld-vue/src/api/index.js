import axios  from "axios";

axios.defaults.baseURL = import.meta.env.VITE_API_URL;

export const limit = 10; 

export function getArticles(page = 1){
  const params = {limit, offset:(page-1)*limit};
  return axios.get('/articles',params);  
}