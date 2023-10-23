import { defineStore } from 'pinia';
import {ref, computed} from 'vue';
import { getUser } from '../api';
import axios from 'axios';

export const useUserStore = defineStore('user', () => {

  const user = ref(null);
  const isLogined = computed(()=>{
    if(user.value) return true;

    if(localStorage.getItem('jwtToken')) return true;

    return false;
  });

  function updateUser(newUser) {
    if(newUser){
      user.value = newUser;
      localStorage.setItem("jwtToken", newUser.token);
    }else{
      user.value = null;
      localStorage.removeItem("jwtToken");
    }
  }

  async function getUserInfo(){
    if(isLogined){
      user.value = user.value == null ? await getUser() : user.value; 
    }

    return user;
  }

  
  return {
    user,
    updateUser
  }

});