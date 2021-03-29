import React, { Component } from 'react'
import Icon from '../components/Icon'
import axios from 'axios'

export default class login extends Component {
  state = {
    visible: false,
    username: '',
    password: '',
    field: ''
  }

  //受控组件,field是动态的key
  handleInput(e, field) {
    this.setState({
      [field]: e.target.value
    })
  }

  //显示隐藏
  handleVisible() {
    this.setState({
      visible: !this.state.visible
    })
  }

  //登录，获取状态，有用户名、密码
  handleLogin() {
    //解构
    //let { username, password } = this.state
    console.log(this.state.username, this.state.password)

    //前端发起post
    axios({
      url: '/api/login',  //路由

      //body里的数据
      data: {
        username: this.state.username,
        password: this.state.password
      },

      //方法类型
      method: 'post'
    }).then(res => {
      console.log(res)
      //获取状态码，并判断
      if (res.data.code === 200) {
        console.log('跳转路由')
        //this.$router.push()
        this.props.history.push('/index/home')
      } else {
        alert(res.data.message)
      }
    })
  }

  //回车登录，e：事件对象
  handleEnter(e) {
    //点击回车键是，e这个事件对象上的keyCode值是13
    if (e.keyCode === 13) {
      this.handleLogin()
    }
  }

  render() {
    return (
      <div>
        <div>
          <input value={this.state.username} onChange={(e) => this.handleInput(e, 'username')} autoFocus placeholder="请输入用户名"></input>
        </div>
        <div>
          <input 
            value={this.state.password} 
            onChange={(e) => this.handleInput(e, 'password')} 
            type={this.state.visible ? 'text' : 'password'}
            onKeyUp={e => this.handleEnter(e)}
            placeholder="请输入密码"></input>
          <Icon name={this.state.visible ? 'show' : 'hide'} className="m-login-icon" onClick={() => this.handleVisible()}></Icon>
        </div>
        <button onClick={() => this.handleLogin()}>登录</button>
      </div>
    )
  }
}
