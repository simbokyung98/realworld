import { getArticles } from '../api';
import {ref} from 'vue';



export function useArticles(){  
  const page = ref(1);
  const articles = ref([]);
  const articlesCount = ref(0);

  async function requestArticles(){
    let response = await getArticles(page.value);

    if(response !== null){
      articles.value = response.data.articles;
      articlesCount.value = response.data.articlesCount;
    }
  }
  
  requestArticles();
  return {page, articles, articlesCount};  
}


