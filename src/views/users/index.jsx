import React,{ useState } from 'react'
import { connect } from 'react-redux'
import {store} from "../../store/store";

export const User = (props) => {
  const [loginInfo,setLoginInfo] = useState (store.getState().Login.userInfo)

  return (
    <div>
      <p>用户名:{loginInfo.rolename}</p>
      <p>账号:{loginInfo.username}</p>
      <p>密码:{loginInfo.password}</p>
    </div>
  )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(User)