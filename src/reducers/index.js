 //redux - 用于打造 rootReducer

 import { combineReducers } from "redux";
 import loginReducer from "./loginReducer";
 /**redux持久化 */
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'login',
    storage,
    // whitelist:['loginReducer']   //只持久化登录的reducer  whitelist:设置只持久化的(白名单)
    // 如果不想将部分state持久化，可以将其放入黑名单(blacklist)中.黑名单是设置
    //blacklist: ['']
}

 //redux - rootReducer统一一处管理项目中的所有reducer
 const rootReducer = combineReducers({
     //数据名：reducer
    Login:loginReducer
 })

const persistedReducer = persistReducer(persistConfig, rootReducer)

export default persistedReducer