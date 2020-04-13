import React, { Component } from 'react'
import Icon from '../components/Icon'
import { fromJS } from 'immutable'
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

  //field是动态的,https://blog.csdn.net/qq_38307825/article/details/82018175
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
    Api.login({ username, password }).then(res => {
      if (res.code === 200) {
        this.props.history.push('/index/home')
      }
    })
    // axios({
    //   url: '/api/login',
    //   method: 'post',
    //   data: { username, password }
    // }).then(res => {
    //   if (res.data.code === 200) {
    //     this.props.history.push('/index/home')
    //   } else {
    //     alert(res.data.message)
    //   }
    // })
  }

  componentDidMount() {
    let obj = {
      a: {
        b: 1
      },
      c: 2
    }
    // console.log(obj)
    // let newObj = JSON.parse(JSON.stringify(obj))  //耗性能
    // newObj.a.b = 3
    // console.log(obj.a.b)
    let objPlus = fromJS(obj)
    let objPlusUpdated = objPlus.setIn(['a', 'b'], 3)
    console.log(obj.a.b)
    console.log(objPlusUpdated.getIn(['a', 'b']))
    console.log(objPlusUpdated.toJS())
    console.log(objPlus.toJS())
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
