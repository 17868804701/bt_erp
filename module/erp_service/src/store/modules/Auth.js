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
      if (state.authButtons.length <= 0) {
        fetch(process.env.BASE_URL+'/auth/interface/getInters')
        .then(res => {
          state.authButtons = res.data;
        })
      }
      console.log(state.authButtons);
    }
  }
}

export default userAuth;
