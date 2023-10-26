import { getArticles } from "../api";
import { ref, watch } from "vue";

export function useArticles() {
  const articles = ref([]);
  const articlesCount = ref(0);

  async function requestArticles() {
    const params = { limit: limit, offset: (page.value - 1) * limit };
    let response = await getArticles(...param, page.value);

    if (response !== null) {
      articles.value = response.data.articles;
      articlesCount.value = response.data.articlesCount;
    }
  }

  const page = ref(1);

  function changePage(num) {
    page.value = num;
  }

  watch(
    () => page.value,
    () => {
      requestArticles();
    }
  );

  return {
    page,
    articles,
    articlesCount,
    changePage,
    requestArticles,
  };
}
