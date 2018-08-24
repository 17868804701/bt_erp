/**
 * Created by qismsom on 2018/8/24.
 */
import {post,fetch,patch,put,getExcel} from '../../../utils/http';
// 当前用户权限
const userAuth = {
  state: {
    authButtons: [],
  },
  mutations: {
    getCurrentAuth(state){//这里的state对应着上面这个state
      debugger;
      if (state.authButtons.length <= 0) {
        fetch('http://10.50.0.144:8702/auth/interface/getInters')
        .then(res => {
          state.authButtons = res.data;
        })
      }
      console.log(state.authButtons);
    }
  }
}

export default userAuth;
