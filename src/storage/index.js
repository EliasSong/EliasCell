import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex)

const store=new Vuex.Store({
  state:{
    isAuth:false,
  },
  mutations:{
    userAuth(state,status){
      state.isAuth=status;
      sessionStorage.setItem('isAuth',status);
    }
  }
})
export default store;