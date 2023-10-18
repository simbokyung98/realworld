import { getArticles } from '../api';
import {ref, watch} from 'vue';

export function useArticles(){  
  
  const articles = ref([]);
  const articlesCount = ref(0);

  async function requestArticles(){
    
    let response = await getArticles(page.value);

    if(response !== null){
      articles.value = response.data.articles;
      articlesCount.value = response.data.articlesCount;
    }

    console.log(articles.value);
  }

  const page = ref(1);

  function changePage(num){
    page.value = num;
  }

  watch(() => page.value,
  () => {
    requestArticles();
  }
  );
  


  
  
  return {
    page, 
    articles, 
    articlesCount, 
    changePage,
    requestArticles
  };  
}


