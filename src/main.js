import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import VueI18n from 'vue-i18n'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import './style/base.less';
import './style/index.less';
import './style/reset.less';
import './style/transition.less';


Vue.use(ElementUI);
Vue.use(VueI18n);
const i18n = new VueI18n({
  locale: localStorage.getItem('lang') || 'CN',    // 语言标识
  messages: {
    'CN': require('@/lang/cn'),
    'EN': require('@/lang/en')
  }
})

 function getTitle(name) {
  const title = 'breadcrumd.' + name;
  return this.$t(title);
}

import { message } from '@/components/Message';
Vue.prototype.$message = message;
Vue.prototype.getTitle = getTitle;

new Vue({
  i18n,
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
