import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/HelloWorld.vue'
import SxcxArea from '../components/sxcxArea.vue'
import ListInfo from '../components/ListInfo.vue'

Vue.use(Router);

export default[
  {
    path: '/',
    component: Home
  },
  {
    path: '/SxcxArea',
    component: SxcxArea
  },
  {
    path: '/ListInfo',
    component: ListInfo
  }
]
