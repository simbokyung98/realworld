import { getArticles, limit } from "../api";
import { ref, watch, computed } from "vue";

import { useUserStore } from "@/store/user";
import { storeToRefs } from "pinia";

const { isLogined, userInfo } = storeToRefs(useUserStore());

export function useArticles() {
  const page = ref(1);
  const tag = ref(null);
  const activeLabel = ref(isLogined.value ? "yourFeed" : "globalFeed");

  const articles = ref([]);
  const articlesCount = ref(0);

  const params = ref({
    yourFeed: { author: userInfo.value?.username },
    globalFeed: {},
    tagFeed: { tag: tag.value },
    myArticles: {},
    favoritedArticles: {},
  });

  async function requestArticles() {
    const params = { ...params.value[activeLabel], limit: limit, offset: (page.value - 1) * limit };
    let response = await getArticles(params);

    if (response !== null) {
      articles.value = response.data.articles;
      articlesCount.value = response.data.articlesCount;
    }
  }

  function changePage(num) {
    page.value = num;
  }

  watch(
    () => page.value,
    () => {
      requestArticles({});
    }
  );

  return {
    page,
    tag,
    activeLabel,
    articles,
    articlesCount,
    changePage,
    requestArticles,
  };
}
