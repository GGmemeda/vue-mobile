import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store';
// 路由许可
import './permission';
import './mock'; // simulation data
import './icons'; // icon
import * as filters from './filters';
import { WechatPlugin } from 'vux';
import VueLazyload from 'vue-lazyload';

const FastClick = require('fastclick');
FastClick.attach(document.body);

Vue.use(WechatPlugin);
Vue.use(VueLazyload);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});

Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key]);
});

