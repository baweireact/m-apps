import React, { Component } from 'react'
import Api from '../api'
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
  handleInput(field, e) {
    this.setState({
      [field]: e.target.value
    })
  }
  handleVisible() {
    let { visible } = this.state
    this.setState({
      visible: !visible
    })
  }
  handleLogin() {
    let { username, password } = this.state
    Api.login({ username, password }).then(res => {
      if (res.code === 200) {
        localStorage.setItem('username', res.data)
        this.props.history.push('/index/home')
      }
    })
  }
  handleEnter(e) {
    if (e.keyCode === 13) {
      this.handleLogin()
    }
  }
  render() {
    let { username, password, visible } = this.state
    return (
      <div>
        <div>
          <input value={username} onChange={this.handleInput.bind(this, 'username')} placeholder="请输入用户名" autoFocus></input>
        </div>
        <div>
          <input 
            value={password} 
            onChange={this.handleInput.bind(this, 'password')} 
            onKeyUp={this.handleEnter.bind(this)}
            placeholder="请输入密码" 
            type={visible ? "text" : "password"}></input>
          <Icon type={visible ? 'xianshimima': 'guanbi'} className="m-login-icon" onClick={this.handleVisible.bind(this)}></Icon>
        </div>
        <div>
          <button onClick={this.handleLogin.bind(this)}>登录</button>
        </div>
      </div>
    )
  }
}
