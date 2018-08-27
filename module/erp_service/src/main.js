import Vue from 'vue';
import App from './App.vue';
import router from './router';
import iView from 'iview';
import vueshowpdf from 'vueshowpdf'
import vuePdfjs from 'vue-pdfjs'
import 'iview/dist/styles/iview.css';
import {Message} from 'iview';
import VueCookie from 'vue-cookie'
// 网络相关 全局变量
import {post,fetch,patch,put,getExcel} from '../utils/http';
import {formatDate_hs} from '../utils/DateTool';
import URLUntil from '../utils/NetworkDefine';
//store
import store from './store';
//auth
import {initialAuth} from '../utils/AuthTool';

Vue.prototype.$url=URLUntil;
Vue.prototype.$post=post;
Vue.prototype.$fetch=fetch;
Vue.prototype.$patch=patch;
Vue.prototype.$put=put;
Vue.prototype.$getExcel=getExcel;
Vue.prototype.$formatDate=formatDate_hs;
Vue.prototype.$VueCookie=VueCookie;
Vue.prototype.$initialAuth = initialAuth;


//定义全局变量

Vue.use(iView);
Vue.use(vueshowpdf);
Vue.use(vuePdfjs);

new Vue({
  el: '#app',
  router: router,
  store: store,
  render: h => h(App),
  beforeCreate: function () {
    console.group('beforeCreate 创建前状态===============》');
  },
  created: function () {
    console.group('created 创建完毕状态===============》');
  },
  beforeMount: function () {
    console.group('beforeMount 挂载前状态===============》');
  },
  mounted: function () {
    console.group('mounted 挂载结束状态===============》');
  },
  beforeUpdate: function () {
    console.group('beforeUpdate 更新前状态===============》');
  },
  updated: function () {
    console.group('updated 更新完成状态===============》');
  },
  beforeDestroy: function () {
    console.group('beforeDestroy 销毁前状态===============》');
  },
  destroyed: function () {
    console.group('destroyed 销毁完成状态===============》');
  }
});
