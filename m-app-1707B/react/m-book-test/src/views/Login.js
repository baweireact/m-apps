import React, { Component } from 'react'
import Api from '../api'
import Icon from '../components/Icon'

export default class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: 'admin',
      password: '123456',
      visiblePassword: false
    }
  }
  handleInput(field, e) {
    this.setState({
      [field]: e.target.value
    })
  }
  handleEnter(e) {
    if (e.keyCode === 13) {
      this.handleLogin()
    }
  }
  handlePassword() {
    let { visiblePassword } = this.state
    this.setState({
      visiblePassword: !visiblePassword
    })
  }
  handleLogin() {
    let { username, password } = this.state
    Api.login({ username, password }).then(res => {
      if (res.code === 200) {
        this.props.history.push('/index/home')
      }
    })
  }
  render() {
    let { username, password, visiblePassword } = this.state
    return (
      <div>
        <div>
          <input 
            value={username} 
            onChange={this.handleInput.bind(this, 'username')} 
            placeholder="请输入用户名" autoFocus></input>
        </div>
        <div>
          <input 
            value={password} 
            onChange={this.handleInput.bind(this, 'password')} 
            onKeyUp={this.handleEnter.bind(this)}
            type={ visiblePassword ? "text" : "password"}
            placeholder="请输入密码"></input>
          <Icon 
            className="m-login-icon"
            type={visiblePassword ? 'xianshimima' : 'guanbi'} 
            onClick={this.handlePassword.bind(this)}></Icon>
        </div>   
        <button onClick={this.handleLogin.bind(this)}>登录</button>     
      </div>
    )
  }
}
