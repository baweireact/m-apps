import React, { useState, KeyboardEvent } from 'react'
import { RouteComponentProps } from 'react-router-dom'
import Api from '../api'
import Icon from '../components/Icon'

interface IProps extends RouteComponentProps {

}

const Login = (props: IProps) => {
  const [ username, setUsername ] = useState('admin')
  const [ password, setPassword  ] = useState('123456')
  const [ visible, setVisible ] = useState(false)

  const handleVisible = () => {
    setVisible(!visible)
  }

  const handleLogin = () => {
    Api.login({ username, password }).then(res => {
      if (res.code === 200) {
        console.log(res.data)
        props.history.push('/index')
      }
    })
  }

  const handleEnter = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.keyCode === 13) {
      handleLogin()
    }
  }

  return (
    <div>
      <div>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="请输入用户名" autoFocus />
      </div>
      <div>
        <input type={ visible ? "text" : "password" } value={password} onChange={(e) => setPassword(e.target.value)} onKeyUp={(e) => handleEnter(e)} placeholder="请输入密码" />
        <Icon name={ visible ? "show" : "hide"} className="m-login-icon" onClick={() => handleVisible()}></Icon>
      </div>
      <button onClick={() => handleLogin()} >登录</button>
    </div>
  )
}

export default Login
