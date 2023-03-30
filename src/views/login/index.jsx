import React,{ useEffect,useState } from 'react'
import { Button, Form, Input } from 'antd';
import { useNavigate } from "react-router-dom";
import s from "./index.module.scss";
import { MyLogo } from "../../utils/tools";
import * as loginActions from "../../actions/loginActions";
//redux - 组建是需要通过一个叫做connect调用的返回值是一个高阶组件 来获取store中的数据
import { connect } from "react-redux";

//redux hooks可以通过 useDispatch去派发，useSlector去获取sotre数据  useSlector((state) => {state})

const Login = (props)=>{
  const navigate = useNavigate() 

  const onFinish = (values) => {
    props.getLoginInfo(values,()=>{
      navigate('/admin/user')
    })
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
          onFinish={(values)=>{
            onFinish(values)
          }}
          labelCol={{span:8}}
          wrapperCol={{span:20}}
        >
          <Form.Item
            label="用户名："
            name="rolename"
            rules={[
              {
                required: true,
                message: '请输入用户名',
              },
            ]}
          >
            <Input placeholder='用户名随意'/>
          </Form.Item>
          <Form.Item
            label="账 号："
            name="username"
            rules={[
              {
                required: true,
                message: '请输入账号',
              },
            ]}
          >
            <Input placeholder='账号随意'/>
          </Form.Item>

          <Form.Item
            label="密 码："
            name="password"
            rules={[
              {
                required: true,
                message: '请输入密码',
              },
            ]}
          >
            <Input.Password placeholder='密码随意'/>
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

//redux - connect有两个参数，第一个参数用来获取store中的state数据，第二个参数用来获取redux的actionCreators中的创建动作的方法
const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({
  getLoginInfo: (params, callback) => dispatch(loginActions.getLoginInfo(params, callback)),
});

export default connect(mapStateToProps,mapDispatchToProps)(Login)