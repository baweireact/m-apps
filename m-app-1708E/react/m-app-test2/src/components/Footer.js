import React from 'react'
import { NavLink } from 'react-router-dom'
import Icon from './Icon'

const Footer = () => {
  return (
    <div className="m-footer">
      <NavLink to="/index/home" className="m-footer-item">
        <Icon type="shouye" className="m-footer-item-icon" ></Icon>
        <div className="m-footer-item-text">首页</div>
      </NavLink>
      <NavLink to="/index/my_book" className="m-footer-item">
        <Icon type="shubao" className="m-footer-item-icon" ></Icon>
        <div className="m-footer-item-text">书包</div>
      </NavLink>
      <NavLink to="/index/me" className="m-footer-item">
        <Icon type="wode" className="m-footer-item-icon" ></Icon>
        <div className="m-footer-item-text">我的</div>        
      </NavLink>
    </div>
  )
}

export default Footer