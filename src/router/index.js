import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '@/components/Main'

Vue.use(VueRouter);
const route = [
  {
    path: '/',
    name: 'HelloWorld',
    component: Main
  }
];
const router = new VueRouter({routes: route});
router.beforeEach((to, from, next) => {
  next();
});
export default router;
