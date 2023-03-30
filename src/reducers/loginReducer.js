//login 登录的所有数据都在这里

export const initialLoginState = {
    isLogin: false,
    userInfo:{},
  };

const loginReducer = (state = initialLoginState , action) => {
    //redux - reducer必须要有返回值 ，返回一个新的state，因为state不可更改，所以返回的新状态一定是state的拷贝  return {...state}
    console.log(action,'action.type');
    switch (action.type) {
    case 'LOGIN_INFO':
        return { ...state, isLogin: true , userInfo:action.payload.userInfo };
    default:
        return state;
    }
}
export default loginReducer