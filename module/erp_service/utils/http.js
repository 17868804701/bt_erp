import axios from 'axios';
import iView from 'iview';
import VueCookie from 'vue-cookie'

axios.defaults.timeout = 5000;
// axios.defaults.baseURL ='http://192.168.1.102:8702';//服务器
axios.defaults.baseURL ='http://10.50.0.144:8702';//本地

//http request 拦截器
axios.interceptors.request.use(
  config => {
    iView.LoadingBar.start();
    config.data = JSON.stringify(config.data);
    config.headers = {
      'Content-Type': 'application/json',
      'Authorization': 'bearer ' + VueCookie.get('access_token'),
    };
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
    if(response.data.errCode === 2){
    }
    return response;
  },
  error => {
    iView.LoadingBar.error();
    if (error.response) {
      switch (error.response.status) {
        case 400:
          iView.Message.error('参数不合法');
          break;
        case 401:
            window.top.location.href = process.env.BASE_URL+"/login";
           console.log('401错误');
          break;
        case 404:
          iView.Message.error('未找到该路径');
          console.log('404错误');
          break;
        case 2001:
          iView.Message.error('Token失效');
          VueCookie.set('access_token','',-1);
          window.top.location.href = process.env.BASE_URL+"/login";
          break;
        case 2002:
          iView.Message.error('你当前的操作没有权限');
          alert('你当前的操作没有权限');
          break;
        case 500:
          iView.Message.error('服务器错误');
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
