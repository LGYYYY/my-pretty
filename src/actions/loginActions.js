import ApiConstants from "../constants/apiConstants";
import Cookies from 'js-cookie';
import { message } from 'antd';
import request from "../base/request";

//这里写的是login的所有动作创建的位置
export const loadingTable = (data) => ({
    type: 'LOGIN_INFO',//动作的类型用常量表示，一般方法名大写
    payload: data, //返回的数据
  });

// const request = (url, options) =>{
//   return fetch(url,options)
//     .then(response => response.json())
//     .catch(error => console.error(error));
// }

export const getLoginInfo = (params, callback) => async (dispatch) =>  {
    dispatch({
        type: 'LOGIN_INFO',//动作的类型用常量表示，一般方法名大写
        payload: {
            userInfo:params
        }, //返回的数据
      })

    // let data = {
    //   userName:params.username,
    //   password:params.password,
    //   nickName:params.nickName
    // }
    // let options = {
    //   method: 'POST',
    //   mode: 'cors',
    //   body: JSON.stringify(data),
    //   headers: {
    //     'Content-Type': 'application/json'
    //   }
    // }
    // request(ApiConstants.HOST_NAME_CREATE,options)
    // console.log(callback,'callback');
    // dispatch(loadingTable(true))
};

  // let options = {
  //   method: 'POST',
  //   mode: 'cors',
  //   body: JSON.stringify(params),
  //   headers: {
  //     'Content-Type': 'application/json'
  //   }
  // }
  // const result =await request(ApiConstants.HOST_NESTJS_POST_LOGIN,options)

//nestJs登录接口
export const getNestLogin = (params, callback) => async (dispatch) =>  {
  try {
    const result = await request({
      method: 'POST',
      url: ApiConstants.HOST_NESTJS_POST_LOGIN,
      data: params,
      headers: {
        'Content-Type':'application/json;charset=utf-8',
      },
    });
    if (result.data && result.status === 200) {
      message.success(result.data.message, 2)
      Cookies.set('TOKEN_PARAMS', result.data.data)
      if (callback) {
        callback(result.data)
      }
    } else {
      Cookies.remove('TOKEN_PARAMS');
      message.error(result.data.message, 2)
    }
  } catch (e) {
    console.log(e);
  }
};

//注册接口
export const createUser = (params, callback) => async (dispatch) =>  {
  try {
    const result = await request({
      method: 'POST',
      url: ApiConstants.HOST_NESTJS_POST_CREATEUSER,
      data: params,
      headers: {
        'Content-Type':'application/json;charset=utf-8',
      },
    });
    if (result.data && result.status === 200) {
      if (callback) {
        callback(result.data)
      }
    } else {
      message.error(result.data.message, 2)
    }
  } catch (e) {
    console.log(e);
    message.error(e.errorMessage, 2)
  }
};

//注册接口
export const upDateUser = (params, callback) => async (dispatch) =>  {
  try {
    const result = await request({
      method: 'POST',
      url: ApiConstants.HOST_NESTJS_POST_UPDATEUSER,
      data: params,
      headers: {
        'Content-Type':'application/json;charset=utf-8',
      },
    });
    if (result.data && result.status === 200) {
      if (callback) {
        callback(result.data)
      }
    } else {
      message.error(result.data.message, 2)
    }
  } catch (e) {
    console.log(e);
  }
};