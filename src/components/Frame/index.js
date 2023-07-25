import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
    LogoutOutlined,
    DownOutlined
  } from '@ant-design/icons';
  import { Layout, Menu,Dropdown } from 'antd';
  import React, { useState } from 'react';
  import { useNavigate , useLocation } from "react-router-dom";
  import Logo from "../../images/logo.jpeg";
  import Time from "../../views/demoOne/time";
  import {store} from "../../store/store";
import Cookies from 'js-cookie';

  const { Header, Sider, Content } = Layout;

  const Frame = (props) => {
    const [collapsed, setCollapsed] = useState(false);
    // const [rolename, setRoleName] = useState(store.getState().Login.userInfo);
    // store.subscribe(()=>{
    //   setRoleName(store.getState().Login.userInfo)
    // })
    const navigate = useNavigate()
    const { pathname } = useLocation()
    const menuList = [
          {
            key: '/admin/time',
            icon: <UserOutlined />,
            label: 'React官网栗子',
          },
          {
            key: '/admin/user',
            icon: <VideoCameraOutlined />,
            label: '用户信息',
          },
          {
            key: '/admin/record',
            icon: <UploadOutlined />,
            label: '课题分离：练习',
            children:[
              {
                label:'练习demo',
                key:'/admin/record/practice'
              },
              {
                label:'todoList',
                key:'/admin/record/todoList'
              },
            ]
          },
          {
            key: '/admin/redux',
            icon: <UploadOutlined />,
            label: '课题分离：理论',
            children:[
              {
                label:'描述reduxThunk',
                key:'/admin/redux/reduxThunk'
              },
              {
                label:'面试题',
                key:'/admin/redux/jobInterview'
              },
            ]
          },
    ]
    const selectKeys = (menuKey) => {
      let result = []

      const findInfo = (arr) => {
        arr.forEach(item => {
          if(menuKey.includes(item.key)){
            result.push(item.key)
            if(item.children){
              findInfo(item.children)
            }
          }
        })
      }
      findInfo(menuList)
      return result
    }

    const items = (
    <Menu 
      theme="light"
      mode="inline"
      onClick={({key})=>{
        console.log(key,'key');
        if(key = '/login'){
          Cookies.remove('TOKEN_PARAMS')
        }
        navigate(key)
      }}
      items={[
        {
          key: '/login',
          icon: <LogoutOutlined />,
          label: '退出登录',
        },
        {
          key: '/admin/user',
          icon: <VideoCameraOutlined />,
          label: '我的',
        },
      ]}
      >
    </Menu>)
  
    return (
      <Layout style={{width:'100%',height:'100vh'}} id='components-layout-demo-custom-trigger'>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="logo">
              <img src={Logo} alt='Pretty'/>
          </div>
          <Menu
            theme="light"
            mode="inline"
            defaultOpenKeys={selectKeys(pathname)}
            defaultSelectedKeys={selectKeys(pathname)}
            onClick={({key})=>{
              navigate(key)
            }}
            items={menuList}
          />
        </Sider>
        <Layout className="site-layout">
          <Header
            className="site-layout-background"
            style={{
              padding: 0,
            }}
          >
            {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: () => setCollapsed(!collapsed),
            })}
            <div className='header'>
              <div style={{fontSize:'18px',fontWeight:'900',display:'flex'}}>LGY的进步记录   
                <div style={{display:'flex',alignItems:'center',marginLeft:'10px'}}>现在<Time/></div>
              </div>
              <div>
                {/* overlay 使用 menu 会报错，一定要跟api文档一致 */}
                <Dropdown overlay={items}>
                  {/* <a>{rolename.rolename}</a> */}
                  <a>个人中心   <DownOutlined/></a>
                </Dropdown>
              </div>
            </div>
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
            }}
          >
            {props.children}
          </Content>
        </Layout>
      </Layout>
    );
  };
  export default Frame;