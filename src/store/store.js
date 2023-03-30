//redux - 构成部分之一 store

import { createStore,applyMiddleware } from "redux";
import thunk from "redux-thunk";
import persistedReducer from "../reducers/index";
//redux-persist 持久化reducer数据
import { persistStore } from 'redux-persist'

const store = createStore(persistedReducer,applyMiddleware(thunk))

const persistor = persistStore(store);

export  { store,persistor }