import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import Routers from './router/index';
import iView from 'iview';
import vueshowpdf from 'vueshowpdf'
import 'iview/dist/styles/iview.css';

Vue.use(VueRouter);
Vue.use(iView);
Vue.use(vueshowpdf);

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
