import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/HelloWorld.vue'
import SxcxArea from '../components/sxcxArea.vue'

Vue.use(Router);

export default[
  {
    path: '/',
    component: Home
  },
  {
    path: '/SxcxArea',
    component: SxcxArea
  }
]
