//这里写的是login的所有动作创建的位置

export const loadingTable = (data) => ({
    type: '',//动作的类型用常量表示，一般方法名大写
    payload: {}, //返回的数据
  });

export const getLoginInfo = (params, callback) => async (dispatch) =>  {
    dispatch({
        type: 'LOGIN_INFO',//动作的类型用常量表示，一般方法名大写
        payload: {
            userInfo:params
        }, //返回的数据
      })
    if (callback) { callback(params) }
    // dispatch(loadingTable(true));
    //封装请求方法，暂未封装，参考ccxi
    //  try {
    //    const result = await request({
    //      method: 'POST',
    //      url: '',
    //      data: {},
    //    });
    //    if (result.data) {
    //      if (callback) { callback(result.data) }
    //    }
    //  } catch (e) {
    //    errorInfo()
    //  }
    // dispatch将data发给reducer
    //  dispatch(loadingTable(false));
};