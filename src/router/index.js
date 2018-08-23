import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '@/components/Main'
import VueCookie from 'vue-cookie'
import {proxylogin} from '../../static/sso-vue'

Vue.use(VueRouter);
const route = [
  {
    path: '/',
    name: 'HelloWorld',
    component: Main
  }
];

const router = new VueRouter({routes: route});
let api = process.env.BASE_URL;
let url = api+'/login/replylogin';
router.beforeEach((to, from, next) => {
  let acessToken =VueCookie.get('access_token');
  console.log(acessToken);
  if(acessToken===null||acessToken===''){
    proxylogin(url,{
      callback:function(data){
        if(data.state === 400){
          window.top.location.href = api+"/login";
        }else if(data.state === 200){
          VueCookie.set('access_token', data.access_token);
          next();
        }else{
          window.top.location.href = api+"/login";
        }
      },
      error:function () {
        alert('服务器错误');
        window.top.location.href = api+"/login";
      },
      timeout:10000
    })
    
  }else {
    next()
  }
});


export default router;
