import Vue from 'vue'
import Router from 'vue-router'
import List from '../peopleManger/List.vue'
import SxcxArea from '../peopleManger/sxcxArea.vue'
import ListInfo from '../peopleManger/ListInfo.vue'

Vue.use(Router);

export default[
  {
    path: '/',
    component: List
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
