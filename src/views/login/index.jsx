import React from 'react'
import { Button, Form, Input } from 'antd';
import { useNavigate } from "react-router-dom";
import s from "./index.module.scss";
import { MyLogo } from "../../utils/tools";

const Login = ()=>{
  const navigate = useNavigate()

  const onFinish = () => {
    console.log(111);
    navigate('/admin/user')
  }

  return (
    <div className={s.login}>
      <div style={{paddingTop:'100px'}}>
        <img src={MyLogo} className={s.logo}/>
      </div>
      <p className={s.title}>LGY的进步记录</p>
      <div className={s.form}>
        <Form
          name="login"
          onFinish={()=>{
            onFinish()
          }}
        >
          <Form.Item
            label="账号："
            name="username"
          >
            <Input placeholder='账号admin'/>
          </Form.Item>

          <Form.Item
            label="密码："
            name="password"
          >
            <Input.Password placeholder='密码admin'/>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              登录
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}

export default Login