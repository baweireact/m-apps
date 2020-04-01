import React, { useState } from 'react'
import Icon from '../components/Icon'
import Api from '../api'

const Login = (props) => {
  const [ username, setUsername ] = useState('admin')
  const [ password, setPassword ] = useState('123456') 
  const [ visible, setVisible ] = useState(false)

  const handleVisible = () => {
    setVisible(!visible)
  }

  const handleEnter = (e) => {
    if (e.keyCode === 13) {
      handleLogin()
    }
  }

  const handleLogin = () => {
    Api.login({ username, password }).then(res => {
      if (res.code === 200) {
        props.history.push('/index/home')
      }
    })
  }

  return (
    <div>
      <div>
        <input placeholder="请输入用户名" value={username} onChange={ (e) => setUsername(e.target.value) } autoFocus ></input>
      </div>
      <div>
        <input placeholder="请输入密码" value={password} onChange={ (e) => setPassword(e.target.value) } type={ visible ? "text" : "password"} onKeyUp={(e) => handleEnter(e)} ></input>
        <Icon name={ visible ? "xianshimima" : 'buxianshimima'} className="m-login-icon" onClick={() => handleVisible()} ></Icon>
      </div>
      <button onClick={() => handleLogin()}>登录</button>
    </div>
  )
}

export default Login