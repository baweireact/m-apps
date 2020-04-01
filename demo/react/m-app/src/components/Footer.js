import React from 'react'
import { NavLink } from 'react-router-dom'
import Icon from './Icon'

const Footer = () => {
  return (
    <div className="m-footer">
      <NavLink to="/index/home" className="m-footer-item">
        <Icon name="shouye" className="m-footer-icon"></Icon>
        <div className="m-footer-text">首页</div>
      </NavLink>
      <NavLink to="/index/my_books" className="m-footer-item">
        <Icon name="shubao" className="m-footer-icon"></Icon>
        <div className="m-footer-text">书包</div>
      </NavLink>
      <NavLink to="/index/me" className="m-footer-item">
        <Icon name="wodedangxuan" className="m-footer-icon"></Icon>
        <div className="m-footer-text">我的</div>
      </NavLink>
    </div>
  )
}

export default Footer
