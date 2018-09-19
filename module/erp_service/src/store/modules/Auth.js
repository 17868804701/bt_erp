/**
 * Created by qismsom on 2018/8/24.
 */
import {post,fetch,patch,put,getExcel} from '../../../utils/http';
// 当前用户权限
const userAuth = {
  state: {
    authButtons: [],
    menuList: [],
  },
  mutations: {
    getCurrentAuth(state){//这里的state对应着上面这个state
      if (state.authButtons.length <= 0) {
        fetch(process.env.BASE_URL+'/auth/app/getResrouce')
        .then(res => {
          state.authButtons = res.data;
          //console.log(state.authButtons);
        })
      }
    },
    getAllMenu(state) {
      fetch(process.env.BASE_URL+'/auth/app/getMenu')
      .then(res => {
        state.menuList = res.data;
      })
    },
    showMenu(state, menuName) {
      for (let i = 0; i < state.menuList.length; i++) {
        let menu = state.menuList[i];
        if (menu.mname === menuName) {
          return true;
        }
      }
      return false;
    }
  }
}

export default userAuth;
