import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { withRouter } from '../utils'

class Nav extends Component {

  handleToLogin() {
    this.props.history.push('/login')
  }

  render() {
    let { name } = this.props
    return (
      <div>
        <NavLink to="/login">登录页</NavLink>
        <button onClick={() => this.handleToLogin()}>登录页</button>
        {name}
      </div>
    )
  }
}

export default withRouter(Nav)
