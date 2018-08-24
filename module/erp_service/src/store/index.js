/**
 * Created by qismsom on 2018/8/24.
 */

import Vue from 'vue';
import vuex from 'vuex';
Vue.use(vuex);

import Auth from './modules/Auth';

export default new vuex.Store({//store对象
  modules: {
    userAuth: Auth
  }
})
