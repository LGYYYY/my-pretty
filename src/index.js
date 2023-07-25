import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter,Routes,Route,Navigate } from 'react-router-dom';
import Login from "./views/login/index";
import CreateUser from "./views/createUser/index";
import Private from "./Private";

//redux - 使用夸组件通信的方法将store中的数据通信给所有的组件
import { Provider } from "react-redux";
import { store,persistor } from "./store/store";
import { PersistGate } from 'redux-persist/lib/integration/react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={ <Navigate to="/login" /> } />
              <Route path='/login' element={<Login />}></Route>
              <Route path='/createUser' element={<CreateUser />}></Route>
              <Route path='/admin/*' element={<Private><App /></Private>}></Route>
            </Routes>
          </BrowserRouter>
        </PersistGate>
      </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
