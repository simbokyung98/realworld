import { getTags } from "../api";
import {ref} from "vue";

export function useTags(){  
  const tags = ref([]);
    

  async function requestTags(){
    let response = await getTags();

    if(response != null){
      tags.value = response.data.tags;
    }
    
  }
  
  requestTags();
  return {requestTags, tags};  
}
  