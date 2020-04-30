import React, { useState, MouseEvent, KeyboardEvent } from 'react'
import { RouteComponentProps } from 'react-router-dom'
import Icon from '../components/Icon'
import Api from '../api'

const Login = (props: RouteComponentProps) => {
  const [ username, setUsername ] = useState('admin')
  const [ password, setPassword ] = useState('123456')
  const [ visible, setVisible ] = useState(false)

  const handleVisible = (e: MouseEvent, count: number ) => {
    setVisible(!visible)
  }

  const handleEnter = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.keyCode === 13 ) {
      handleLogin()
    }
  }

  const handleLogin = () => {
    Api.login({ username, password }).then(res => {
      if (res.code === 200) {
        localStorage.setItem('token', res.data.username)
        props.history.push('/index/home')
      }
    })
  }

  return (
    <div>
      <div>
        <input value={username} onChange={(e) => setUsername(e.target.value)} placeholder="请输入用户名" autoFocus></input>
      </div>
      <div>
        <input value={password} onChange={(e) => setPassword(e.target.value)} onKeyUp={ (e) => handleEnter(e)  } placeholder="请输入密码" type={ visible ? 'text' : 'password' }></input>
        <Icon name={ visible ? 'show' : 'hide' } onClick={ (e, count) => handleVisible(e, count) } className="m-login-icon"></Icon>
      </div>
      <button onClick={() => handleLogin()}>登录</button>
    </div>
  )
}

export default Login
