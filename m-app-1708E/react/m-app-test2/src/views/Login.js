import React, { Component } from 'react'
import axios from 'axios'
import Icon from '../components/Icon'
import Api from '../api'
import { fromJS } from 'immutable'

export default class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: 'admin',
      password: '123456',
      visible: false
    }
  }

  handleInput(e, field) {
    console.log(e)
    this.setState({
      [field]: e.target.value
    })
  }

  handleKeyUp(e) {
    console.log(e)
    if (e.keyCode === 13) {
      this.handleLogin()
    }
  }

  handelVisible() {
    let { visible } = this.state
    this.setState({
      visible: !visible
    })
  }

  handleLogin() {
    let { username, password } = this.state
    //console.log(username, password)
    Api.login({username, password}).then(res => {
      if (res.code === 200) {
        //alert('登录成功！')
        this.props.history.push('/index/home')
      } else if (res.code === 400) {
        alert(res.message)
      }
    })
    // axios({
    //   url: 'http://localhost:90/api/login',
    //   data: {
    //     username, password
    //   },
    //   method: 'post'
    // }).then(res => {
    //   if (res.data.code === 200) {
    //     //alert('登录成功！')
    //     this.props.history.push('/index/home')
    //   } else if (res.data.code === 400) {
    //     alert(res.data.message)
    //   }
    // })
  }

  componentDidMount() {
    console.log('immutable')
    let obj = {
      a: {
        b: 1
      },
      c: 2
    }
    let obj2 = JSON.parse(JSON.stringify(obj))  //深拷贝，有性能问题
    obj2.a.b = 2
    console.log('obj:', obj)
    console.log('obj2:', obj2)

    let obj3 = {...obj}  //浅拷贝
    obj3.c = 3
    console.log('obj:', obj)
    console.log('obj3:', obj3)

    obj3.a.b = 4

    console.log('obj:', obj)
    console.log('obj3:', obj3)


    let immutableObj = fromJS({
      c: {
        d: 1
      },
      e: 2
    })

    console.log(immutableObj.getIn(['c', 'd']))  //1
    console.log(immutableObj.getIn(['c']).toJS())

    let newObj = immutableObj.setIn(['c', 'd'], 3)
    console.log(immutableObj.toJS())
    console.log(newObj.toJS())
  }


  render() {
    let { username, password, visible } = this.state
    return (
      <div>
        <div>
          姓名：<input value={username} onChange={(e) => this.handleInput(e, 'username')} placeholder="请输入用户名" autoFocus ></input>
        </div>
        <div>
          密码：<input value={password} onChange={(e) => this.handleInput(e, 'password')} placeholder="请输入密码" type={ visible ? "text" : "password"} onKeyUp={(e) => this.handleKeyUp(e)}></input>
          <Icon type={ visible ? "xianshimima" : "buxianshimima"} className="m-login-icon" onClick={() => this.handelVisible()}></Icon>
        </div>
        <button onClick={() => this.handleLogin()}>登录</button>
      </div>
    )
  }
}
