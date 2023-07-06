import axios from 'axios';
import Qs from 'qs';
import Cookies from 'js-cookie';
import ApiConstants from '../constants/apiConstants';
import history from './history';

const instance = axios.create();
instance.defaults.baseURL = ApiConstants.HOST_NAME;
instance.defaults.timeout = 120000;
/*eslint-disable*/
instance.defaults.transformRequest = function (data, headers) {
  if (data instanceof FormData) {
    return data;
  }
  if (headers["Content-Type"] &&
      headers["Content-Type"] ===
        "application/x-www-form-urlencoded;charset=utf-8") {
    data = Qs.stringify(data);
    return data
  }
  data = JSON.stringify(data)
  return data;
};
/* eslint-enable */
// axios.defaults.withCredentials = true;

// **路由请求拦截**
// http request 拦截器
let dispatch;
instance.interceptors.request.use(
  config => {
    dispatch = config.action
    // 判断是否存在ticket，即判断用户是否登录，如果存在的话，则每个http header都加上ticket
    if (Cookies.get('TOKEN_PARAMS')) {
      config.headers['TOKEN_PARAMS'] = Cookies.get('TOKEN_PARAMS');
    }
    if (Cookies.get('remember')) {
      config.headers['remember'] = Cookies.get('remember');
    }
    return config;
  },
  error => Promise.reject(error)
);

// http 响应 拦截器
instance.interceptors.response.use((response) => {
  // if (response.data && (response.data.code === ResponseCode.UN_LOGIN_OR_EXPIRED)) {// 用户未登录跳转到登录页面
  //   //  Cookies.remove(TOKEN_PARAMS);
  //   console.log("响应结果",response.data.msg);
  //    message.error(response.data.msg);
  //    hashHistory.push('/login');
  //    return Promise.reject(response || 'error')
  // }else if(response.data && (response.data.code === ResponseCode.CUSTOMISE_ERROR)){
  //   message.error(response.data.msg);
  //   // return response;
  // }else if(response.data && (response.data.code === ResponseCode.OPERATER_ERROR)){
  //   message.error(response.data.msg);
  // }else if(response.data && (response.data.code === ResponseCode.NO_ENOUGH_AUTHORITY)){
  //   message.error(response.data.msg);
  //   hashHistory.push('/home/homePage');
  // }
  // return response;
  console.log(response,'response');
  if (response.data && (response.data.code === 1401)) {
    Cookies.remove('TOKEN_PARAMS');
    history.replace('/login')
    return Promise.reject(response || 'error')
  }
  return response;
}, (error) => {
    console.log(error,'error');
  if (error.response) {
    console.log(error.response);
    return Promise.reject(error.response.data);
  }
  if (error.message) {
    console.log(error.message);
    return Promise.reject(error);
  }
  return Promise.reject(error);
});

export const requestUpload = axios.create();

requestUpload.defaults.baseURL = ApiConstants.HOST_NAME;

requestUpload.interceptors.request.use(
  config => {
    config.headers['xmt-uid'] = 1;
    return config;
  },
  error => Promise.reject(error)
);

// http 响应 拦截器
requestUpload.interceptors.response.use((response) => {
  // Do something with response data 
  // 213
  if (response.data && (response.data.code === 1401)) {
    Cookies.remove('TOKEN_PARAMS');
    history.replace('/login')
    return Promise.reject(response || 'error')
  }
  return response;
}, (error) => {
  if (error.response) {
    console.log(error.response);
    return Promise.reject(error.response.data);
  }
  if (error.message) {
    console.log(error.message);
    return Promise.reject(error);
  }
  return Promise.reject(error);
});
export default instance;
