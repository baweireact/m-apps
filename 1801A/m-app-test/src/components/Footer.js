import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import Icon from './Icon'

export default class Footer extends Component {
  render() {
    return (
      <div className="m-footer">
        <NavLink to="/index/home" className="m-footer-item">
          <Icon name="home" className="m-footer-icon"></Icon>
          <div className="m-footer-text">首页</div>
        </NavLink>
        <NavLink to="/index/my_books" className="m-footer-item">
          <Icon name="shubao" className="m-footer-icon"></Icon>
          <div className="m-footer-text">书包</div>          
        </NavLink>
        <NavLink to="/index/me" className="m-footer-item">
          <Icon name="me" className="m-footer-icon"></Icon>
          <div className="m-footer-text">我的</div>          
        </NavLink>
      </div>
    )
  }
}
