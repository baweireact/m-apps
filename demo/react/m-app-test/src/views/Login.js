import React, { Component } from 'react'
import axios from 'axios'
import Icon from '../components/Icon'

export default class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: 'admin',
      password: '123456',
      visible: false
    }
  }

  //field是动态的
  handleInput(field, e) {
    this.setState({
      [field]: e.target.value
    })
  }

  handleVisible() {
    this.setState({
      visible: !this.state.visible
    })
  }

  handleEnter(e) {
    if (e.keyCode === 13) {
      this.handleLogin()
    }
  }

  handleLogin() {
    let { username, password } = this.state

    //http://www.axios-js.com/zh-cn/docs/#axios-config
    axios({
      url: '/api/login',
      method: 'post',
      data: { username, password }
    }).then(res => {
      if (res.data.code === 200) {

      } else {
        alert(res.data.message)
      }
    })
  }

  render() {
    let { username, password, visible } = this.state
    return (
      <div>
        <div>
          <input value={username} onChange={(e) => this.handleInput('username', e)} placeholder="请输入用户名" autoFocus ></input>
        </div>
        <div>
          <input value={password} onChange={(e) => this.handleInput('password', e)} type={visible ? 'text' : 'password'} placeholder="请输入密码" onKeyUp={(e) => this.handleEnter(e)} ></input>
          <Icon name={visible ? "xianshimima" : "buxianshimima"} className="m-login-icon" onClick={ () => this.handleVisible()} ></Icon>
        </div>
        <button onClick={() => this.handleLogin()}>登录</button>
      </div>
    )
  }
}
