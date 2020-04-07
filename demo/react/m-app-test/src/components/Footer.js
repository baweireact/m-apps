import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import Icon from './Icon'

const Footer = (props) => {
  return (
    <div className="m-footer">
      <NavLink to="/index/home" className="m-footer-item">
        <Icon name="shouye" className="m-footer-item-icon"></Icon>
        <div className="m-footer-item-text">首页</div>
      </NavLink>
      <NavLink to="/index/my_books" className="m-footer-item" >
        <Icon name="shubao" className="m-footer-item-icon"></Icon>
        <div className="m-footer-item-text">书包</div>        
      </NavLink>
      <NavLink to="/index/me" className="m-footer-item" >
        <Icon name="wodedangxuan" className="m-footer-item-icon"></Icon>
        <div className="m-footer-item-text">我的</div>          
      </NavLink>
    </div>
  )
}

//相当于vuex里计算属性，取值
const mapStateToProps = (state) => {
  return {
  }
}

//相当于提交mutation，改值
const mapDispatchToProps = (dispatch) => {
  return {
    onSetState(key, value) {
      dispatch({type: 'SET_STATE', key, value})
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Footer)