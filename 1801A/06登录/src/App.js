import React, { Component } from 'react'

export default class App extends Component {
  state = {
    username: 'admin',
    password: '123456'
  }

  //e是事件对象，是浏览器默认传过来的，target是目标dom，value是值
  handleUsername(e) {
    this.setState({
      username: e.target.value
    }) 
  }

  handlePassword(e) {
    this.setState({
      password: e.target.value
    }) 
  }

  handleLogin() {
    console.log(this.state.username, this.state.password)
  }

  render() {
    return (
      <div>
        <div>
          <input value={this.state.username} onChange={(e) => this.handleUsername(e)} placeholder="请输入用户名"></input>
        </div>
        <div>
          <input value={this.state.password} onChange={(e) => this.handlePassword(e)} placeholder="请输入密码"></input>
        </div>
        <div>
          <button onClick={() => this.handleLogin()}>登录</button>
        </div> 
      </div>
    )
  }
}
