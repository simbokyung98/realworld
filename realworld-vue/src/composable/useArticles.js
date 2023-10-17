import { getArticles } from '../api';
import {ref, reative} from "vue";

const page = ref(1);

export function useArticles(){  

  const articles = reative([]);
  const articleCount = ref(0);

  let response = rquestArticle();

  if(response !== null){
    articles = response.articles;
    articleCount = response.articleCount; 
  }

  return {page, articles, articleCount};  
}

async function rquestArticle(){
  return await getArticles(page.value); 
}

