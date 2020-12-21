import Vue from 'vue';
import Vuex from 'vuex';
import { getKeepAliveRouter } from '@/utils';
import { routes } from '@/router';
Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    cacheRouters: getKeepAliveRouter(routes),
    pages: [],
  },
  getters: {},
  mutations: {
    ADD_VIEW(state, obj) {
      state.pages.push(obj);
    },
    REMOVE_VIEW(state, key) {
      state.pages = state.pages.filter((page) => page.name !== key);
    },
  },
  actions: {},
});

export default store;
