import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
    LogoutOutlined,
  } from '@ant-design/icons';
  import { Layout, Menu,Dropdown } from 'antd';
  import React, { useState } from 'react';
  import { useNavigate } from "react-router-dom";
  import Logo from "../../images/logo.jpeg";
  import Time from "../../views/demoOne/time";

  const { Header, Sider, Content } = Layout;

  const Frame = (props) => {
    const [collapsed, setCollapsed] = useState(false);
    const navigate = useNavigate()
    return (
      <Layout style={{width:'100%',height:'100vh'}} id='components-layout-demo-custom-trigger'>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="logo">
              <img src={Logo} alt='Pretty'/>
          </div>
          <Menu
            theme="light"
            mode="inline"
            defaultSelectedKeys={['1']}
            onClick={({key})=>{
              navigate(key)
            }}
            items={[ 
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
                label: '方法练习',
                children:[
                  {
                    label:'练习demo',
                    key:'/admin/record/practice'
                  }
                ]
              },
            ]}
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
                <Dropdown overlay={
                  <Menu 
                    theme="light"
                    mode="inline"
                    onClick={({key})=>{
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
                  </Menu>
                }>
                  <a>管理员</a>
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