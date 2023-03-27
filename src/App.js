import './App.css';
import React from 'react';
import Time from "./views/demoOne/time";
import MethodsRecord from "./views/methodsRecord/index";
import User from "./views/users/index";
import { Routes, Route,Navigate } from "react-router-dom"
import Frame from "./components/Frame/index";
import routeList from "./routes";

function App() {
  return (
    <Frame>
      <Routes>
          <Route path="time" element={<Time />}></Route>
          <Route path="record/practice" element={<MethodsRecord />}></Route>
          <Route path="user" element={<User />}></Route>
          {/* <Route path="/" element={<Navigate to='/film' />}></Route> */}
      </Routes>
    </Frame>
  );
}

export default App;
