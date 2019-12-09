import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import Icon from '../components/Icon'

export default class Footer extends Component {
  render() {
    return (
      <div className="m-footer">
        <NavLink to="/index/home" className="m-nav-item">
          <div><Icon type="shouye" className="m-nav-icon"></Icon></div>
          <div className="m-nav-text">首页</div>
        </NavLink>
        <NavLink to="/index/my_book" className="m-nav-item">
          <div><Icon type="shubao" className="m-nav-icon"></Icon></div>
          <div className="m-nav-text">书包</div>          
        </NavLink>
        <NavLink to="/index/me" className="m-nav-item">
          <div><Icon type="wodedangxuan" className="m-nav-icon"></Icon></div>
          <div className="m-nav-text">我的</div>             
        </NavLink>
      </div>
    )
  }
}
