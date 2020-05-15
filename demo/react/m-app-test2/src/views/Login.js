import React, { Component } from 'react'
import axios from 'axios'

export default class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: 'admin',
      password: '123456'
    }
  }

  handleUsername(e) {
    this.setState({
      username: e.target.value
    })
  }

  handlePasswrod(e) {
    this.setState({
      password: e.target.value
    })
  }

  handleEnter(e) {
    if (e.keyCode === 13) {
      this.handleLogin()
    }
  }

  handleLogin() {
    let { username, password } = this.state
    console.log(username, password)
    axios({
      url: '/api/login',
      data: {
        username,
        password
      },
      method: 'post'
    }).then(res => {
      if (res.data.code === 200) {
        this.props.history.push('/index')
      }
    })
  }

  render() {
    let { username, password } = this.state
    return (
      <div>
        <div>
          <input placeholder="请输入用户名" value={username} onChange={(e) => this.handleUsername(e)} autoFocus></input>
        </div>
        <div>
          <input placeholder="请输入密码" type="password"  value={password} onChange={(e) => this.handlePasswrod(e)} onKeyUp={(e) => this.handleEnter(e)}></input>
        </div>  
        <button onClick={() => this.handleLogin()}>登录</button>      
      </div>
    )
  }
}
