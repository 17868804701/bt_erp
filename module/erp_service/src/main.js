import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import Routers from './router/index';
import iView from 'iview';
import vueshowpdf from 'vueshowpdf'
import vuePdfjs from 'vue-pdfjs'
import 'iview/dist/styles/iview.css';
import VueCookie from 'vue-cookie'
import Api from "../utils/http";
global.Api = Api;

import axios from 'axios'


Vue.use(VueCookie)

//定义全局变量

Vue.use(VueRouter);
Vue.use(iView);
Vue.use(vueshowpdf);
Vue.use(vuePdfjs);

// The routing configuration
const RouterConfig = {
  routes: Routers
};
const router = new VueRouter(RouterConfig);

new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
});
