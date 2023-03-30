import React from 'react'
import reduxImg from "../../images/redux.png";

function ReduxThunk() {
  return (
    <div>
        <div>
            <h2>描述redux中间件：</h2>
            <p>中间件：实现特定功能的一个函数</p> 
            <p>redux-thunk：异步数据交互【处理前后端交互】</p>
            <p><h2>redux三大原则： </h2><br/>
                1-状态只读：原state不可更改 <br/>
                2-单一数据源：单一数据源就是一个对象 <br/>
                3-reducers是一个纯函数，修改数据只能通过reducer来进行<br/>
                纯函数，输入和输出保持一致
            </p>
            <p><h2>操作流程</h2>就是rootReducer给数据给到store，sotre在components组件中获取数据，组件进行前后端交互触发action，action通过dispactch派发给reducer，reducer判断动作</p>
            <img src={reduxImg} style={{width:'50%'}}/><br/>
            <a href="https://blog.csdn.net/weixin_56663198/article/details/129015304" target="_blank">参考文件</a>
            <p><h2>redux-thunk:</h2>redux-thunk主要对异步运用中间件做一些处理，因为reducer应该是一个纯函数，不能有副作用，只能根据action对state进行更新，因此不能在此发出网络请求。
               那么借助redux-thunk来在发出action至reducer处理之间借助middleware来进行处理。<br/>
               middleware要传入的参数就是三个，store,next,action,redux-thunk用于异步API，因为异步 API action creator返回的是一个funciton，而不是一个对象，所以redux-thunk做的事情 其实很简单，
               就是看第三个参数action是否是function,是的话，就执行它，如果不是， 就按照原来那样执行next(action)
            </p>
            <p>applyMiddleware,middleware:Redux里我们都知道dispatch一个action,就会到达reducer，而middleware就是允许我们在dispatch action之后，到达reducer之前，搞点事情。</p>
            <p><h2>自己总结：</h2>redux-thunk是一个中间件，reducer是纯函数，不能有副作用，需要redux-thunk来发起action处理异步请求，applyMiddleware根据thunk的返回值来处理到达reducer之前的事情</p>
            <p><h2>自己理解大白话:</h2>thunk和applyMiddleware是为了解决派发之后reducer不能处理的异步函数</p>
            <a href="https://blog.csdn.net/cscj2010/article/details/125705530" target="_blank">Redux最新实践指南之Redux-Toolkit</a>
        </div>
    </div>
  )
}

export default ReduxThunk