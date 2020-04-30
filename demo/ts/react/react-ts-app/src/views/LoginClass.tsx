import React, { Component, ChangeEvent, KeyboardEvent, MouseEvent } from 'react'
import { RouteComponentProps } from 'react-router-dom'
import Icon from '../components/Icon'
import Api from '../api'

interface IState {
  username: string,
  password: string,
  visible: boolean
}

interface IProp extends RouteComponentProps {

}

export default class LoginClass extends Component<IProp, IState> {
  constructor(props: IProp) {
    super(props)
    this.state = {
      username: 'admin',
      password: '123456',
      visible: false
    }
  }

  handleInput(e: ChangeEvent<HTMLInputElement>, field: string) {
    // @ts-ignore
    this.setState({
      [field]: e.target.value
    })
  }

  handleVisible(e: MouseEvent<Element>, count: number) {
    let { visible } = this.state
    this.setState({
      visible: !visible
    })
  }

  handleEnter(e: KeyboardEvent<HTMLInputElement>) {
    if(e.keyCode === 13) {
      this.handleLogin()
    }
  }

  handleLogin() {
    let { username, password } = this.state
    Api.login({ username, password }).then(res => {
      if (res.code === 200) {
        localStorage.setItem('token', res.data.username)
        this.props.history.push('/index/home')
      }
    })
  }

  render() {
    let { username, password, visible } = this.state
    return (
      <div>
        <div>
          <input value={username} onChange={(e) => this.handleInput(e, 'username')} placeholder="请输入用户名" autoFocus />
        </div>
        <div>
          <input value={password} onChange={(e) => this.handleInput(e, 'password')} onKeyUp={ (e) => this.handleEnter(e) }  placeholder="请输入密码" type={ visible ? 'text' : 'password' }/>
          <Icon name={ visible ? 'show' : 'hide' } onClick={ (e, count) => this.handleVisible(e, count) } className="m-login-icon"></Icon>
        </div>
        <button onClick={() => this.handleLogin()}>登录</button>
      </div>
    )
  }
}
