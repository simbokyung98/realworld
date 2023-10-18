import axios  from "axios";

axios.defaults.baseURL = import.meta.env.VITE_API_URL;

export const limit = 10; 

export function getArticles(page){
  const params = {limit : limit, offset:(page-1)*limit};
  let response = null;
  return axios.get('/articles',{params});    
}

export function getTags(){
  return axios.get('/tags');
}