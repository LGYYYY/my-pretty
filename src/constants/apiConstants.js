let HOST_NAME;
// let HOST_NAME = 'http://localhost:3003'
console.log(process.env.NODE_ENV);
switch (process.env.NODE_ENV) {
    case "development":
      HOST_NAME = 'http://localhost:3001'//nestjs端口
      break;
    case "production":
  
      break;
    default:
      HOST_NAME = 'http://localhost:3001'//nestjs端口
  }

  console.log(HOST_NAME,'HOST_NAME');
export default {
    HOST_NAME: HOST_NAME,

    HOST_NAME_CREATE:HOST_NAME + '/people/create',
    HOST_NAME_USERSLIST:HOST_NAME + '/people',

    //nestjs
    HOST_NESTJS_POST_LOGIN:HOST_NAME + '/auth/login',//登录接口
    HOST_NESTJS_POST_CREATEUSER:HOST_NAME + '/auth/createUser',//注册接口
    HOST_NESTJS_POST_UPDATEUSER:HOST_NAME + '/auth/upDateUser',//注册接口

}
