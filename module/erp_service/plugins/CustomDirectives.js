/**
 * Created by qismsom on 2018/8/27.
 */

import Vue from 'vue'
import store from '../src/store';

/**权限指令**/
const has = Vue.directive('has', {
  bind: function (el, binding) {
    // 获取页面按钮权限
    let code = binding.value;
    let arg = binding.arg;
    if (arg === 'btnCode') {
      if (!Vue.prototype.$_hasBtn(code)) {
        el.parentNode.removeChild(el);
      }
    }else if (arg === 'menuName') {
      if (!Vue.prototype.$_hasMenu(code)) {
        debugger;
        el.parentNode.removeChild(el);
        el.style = 'display: none';
      }
    }else {
      console.log('权限类型有误!');
    }
  }
});


// 按钮权限检查方法
Vue.prototype.$_hasBtn = function (value) {
  let isExist = false;
  // 获取用户按钮权限
  let buttons = store.state.userAuth.authButtons;
  for (let i = 0; i < buttons.length; i++) {
    let button = buttons[i];
    if (button.icode === value) {
      isExist = true;
    }
    return isExist;
  }
};

// 菜单权限检查方法
Vue.prototype.$_hasMenu = function (value) {
  let isExist = false;
  // 获取用户按钮权限
  let menuList = store.state.userAuth.menuList;
  for (let i = 0; i < menuList.length; i++) {
    let menu = menuList[i];
    if (menu.mname === value) {
      isExist = true;
    }
    return isExist;
  }
};

export {has}
