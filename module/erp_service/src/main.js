import Vue from 'vue';
import App from './App.vue';
import router from './router';
import iView from 'iview';
import vueshowpdf from 'vueshowpdf'
import vuePdfjs from 'vue-pdfjs'
import 'iview/dist/styles/iview.css';
import VueCookie from 'vue-cookie'

// 网络相关 全局变量
import {post,fetch,patch,put} from '../utils/http';
import URLUntil from '../utils/NetworkDefine';

Vue.prototype.$url=URLUntil;
Vue.prototype.$post=post;
Vue.prototype.$fetch=fetch;
Vue.prototype.$patch=patch;
Vue.prototype.$put=put;


//定义全局变量

Vue.use(iView);
Vue.use(vueshowpdf);
Vue.use(vuePdfjs);

new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
});
