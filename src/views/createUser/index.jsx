import React from 'react'
import { connect } from 'react-redux'
import { Button, Form, Input, message } from 'antd';
import { useNavigate, useSearchParams } from "react-router-dom";
import s from "./index.module.scss";
import { MyLogo } from "../../utils/tools";
import * as loginActions from "../../actions/loginActions";

const CreateUser = (props) => {
    const navigate = useNavigate() 
    const [getSearchArr] = useSearchParams()

    const onFinish = (values) => {
        if(getSearchArr.getAll('type') == 'create'){
            props.createUser(values,res => {
                if(res.success){
                    message.success(res.message)
                    navigate('/login')
                }else{
                    message.error(res.message)
                }
            })
        }else{
            props.upDateUser(values,res => {
                if(res.success){
                  message.success(res.message)
                  navigate('/login')
              }else{
                  message.error(res.message)
              }
            })
        }
        
    }
  return (
    <div className={s.login}>
      <div style={{paddingTop:'100px'}}>
        <img src={MyLogo} className={s.logo}/>
      </div>
      <p className={s.title}>{getSearchArr.getAll('type') == 'create' ? '注册账号' : '修改密码'}</p>
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
            name="nickName"
            rules={[
              {
                required: true,
                message: '请输入用户名',
              },
            ]}
          >
            <Input placeholder='请输入用户名'/>
          </Form.Item>
          <Form.Item
            label="账 号："
            name="userName"
            rules={[
              {
                required: true,
                message: '请输入账号',
              },
            ]}
          >
            <Input placeholder='请输入账号'/>
          </Form.Item>

          <Form.Item
            label="密 码："
            name="passWord"
            rules={[
              {
                required: true,
                message: '请输入密码',
              },
            ]}
          >
            <Input.Password placeholder='请输入密码'/>
          </Form.Item>
          <Form.Item style={{marginBottom:'10px'}}>
            <div className={s.btn}>
                <Button type="primary" htmlType="submit">
                    {getSearchArr.getAll('type') == 'create' ? '注册账号' : '修改密码'}
                </Button>
                
            </div>
          </Form.Item>
          <div style={{float:'right',textAlign:'center',width:'80%'}}>已有账号？直接<a onClick={()=>{navigate('/login')}}>登录</a></div>
        </Form>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps =(dispatch) => ({
    createUser:(params,callback) => dispatch(loginActions.createUser(params,callback)),
    upDateUser:(params,callback) => dispatch(loginActions.upDateUser(params,callback))
})

export default connect(mapStateToProps, mapDispatchToProps)(CreateUser)