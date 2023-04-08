import Vue from 'vue'
import { createPinia, PiniaVuePlugin } from 'pinia'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import App from './App.vue'
import router from './router'

Vue.use(PiniaVuePlugin);
Vue.use(ElementUI);

new Vue({
  router,
  pinia: createPinia(),
  render: (h) => h(App)
}).$mount('#app')
