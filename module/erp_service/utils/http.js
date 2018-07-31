import axios from 'axios';
import iView from 'iview';
import VueCookie from 'vue-cookie'

axios.defaults.timeout = 5000;
axios.defaults.baseURL ='http://10.50.0.144:8702';//服务器
// axios.defaults.baseURL ='http://192.168.1.103:8089';//本地


//http request 拦截器
axios.interceptors.request.use(
  config => {
    iView.LoadingBar.start();
    config.data = JSON.stringify(config.data);
    config.headers = {
      'Content-Type': 'application/json',
      'Authorization': 'bearer ' + VueCookie.get('access_token')
    };
    let acessToken = VueCookie.get('access_token');
    // console.log(config);
    return config;
  },
  error => {
    iView.LoadingBar.error();
    return Promise.reject(err);
  }
);

//http response 拦截器
axios.interceptors.response.use(
  response => {
    iView.LoadingBar.finish();
    if(response.data.errCode ==2){
    }
    return response;
  },
  error => {
    iView.LoadingBar.error();
    if (error.response) {
      switch (error.response.status) {
        case 400:
          console.log('参数不合法');
          break;
        case 401:            /**token未授权或token授权失败，过期等等**/
        // 401 清除token信息并跳转到登录页面
          break;
        case 404:            /**未找到页面**/
          // 404 跳转到404页面
          console.log('404错误')
          break;
        case 2001:
          /**未找到页面**/
          console.log("2001错误");
          window.top.location.href = "https://www.baidu.com";
          break;
        case 500:
          console.log('服务器错误');
          break;
      }
    }
    return Promise.reject(error)
  }
)


/**
 * 封装get方法
 * @param url
 * @param data
 * @returns {Promise}
 */

export function fetch(url,params={}){
  return new Promise((resolve,reject) => {
    axios.get(url,{
      params:params
    })
    .then(response => {
      resolve(response.data);
    })
    .catch(err => {
      console.log(err);
      reject(err)
    })
  })
}


/**
 * 封装post请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function post(url,data = {}){
  return new Promise((resolve,reject) => {
    axios.post(url,data)
    .then(response => {
      resolve(response.data);
    },err => {
      reject(err)
    })
  })
}

/**
 * 封装patch请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function patch(url,data = {}){
  return new Promise((resolve,reject) => {
    axios.patch(url,data)
    .then(response => {
      resolve(response.data);
    },err => {
      reject(err)
    })
  })
}

/**
 * 封装put请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function put(url,data = {}){
  return new Promise((resolve,reject) => {
    axios.put(url,data)
    .then(response => {
      resolve(response.data);
    },err => {
      reject(err)
    })
  })
}
