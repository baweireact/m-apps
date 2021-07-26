import React, { Component } from 'react'
import Icon from '../components/Icon'
import Api from '../api'

export default class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: 'admin',
      password: '123456',
      visible: false
    }
  }

  handleInput(field, value) {
    this.setState({
      [field]: value
    })
  }

  handleVisible() {
    this.setState({
      visible: !this.state.visible
    })
  }

  handleLogin() {
    const { username, password } = this.state
    Api.login({ username, password }).then(res => {
      console.log(res)
      if (res.code === 200) {
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
    const { username, password, visible } = this.state
    return (
      <div>
        <div>
          <input value={ username } onChange={ (e) => this.handleInput('username', e.target.value) } placeholder="请输入用户名" autoFocus></input>
        </div>
        <div>
          <input value={ password } type={ visible ? 'text' : 'password'} 
            onChange={ (e) => this.handleInput('password', e.target.value) }
            onKeyUp={ (e) => this.handleEnter(e) } 
            placeholder="请输入密码"></input>
          <Icon name={ visible ? 'show' : 'hide' } onClick={() => this.handleVisible() } className="m-login-icon"></Icon>
        </div>
        <button onClick={ () => this.handleLogin()}>登录</button>
      </div>
    )
  }
}
