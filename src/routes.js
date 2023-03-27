/**
 * 路由配置文件
 * @version 1.0
 * 支持二级路由形式
 * 利用第三方插件缓存页面，参考https://github.com/CJY0208/react-router-cache-route
 */
 import React from 'react';
 import Time from "./views/demoOne/time";
 
 const routesConfig = {
   sideNav: [
     {
       title: 'React官网栗子',// 侧边栏title/顶部tab菜单title
    //    icon: <CompassFilled />,// 侧边栏icon
       key: '/admin',// 路由
       component: <Time/>,// 页面组件
       subs: [],
     },
     {
      title: '用户信息',// 侧边栏title/顶部tab菜单title
      key: '/admin/user',// 路由
      component: <Time/>,// 页面组件
      subs: [],
    },
    {
      title: '方法练习',// 侧边栏title/顶部tab菜单title
      key: '/admin/user',// 路由
      component: <Time/>,// 页面组件
      subs: [],
    },
    //  {
    //    title: '',// 侧边栏title/顶部tab菜单title
    //    icon: <CompassFilled />,// 侧边栏icon
    //    key: '/home/data',// 路由
    //    component: LoadableComponent(() => import('./views/Home')),// 页面组件
    //    exact: true,// 是否全匹配
    //    cache: true,// 是否需要缓存页面
    //    saveScrollPosition: true, // 是否需要缓存页面位置
    //    whenCache: 'always', // 缓存时机
    //    show: true,//是否展示在topNav
    //    subs: [],
    //  },
   ],
 }
 export default routesConfig;
 