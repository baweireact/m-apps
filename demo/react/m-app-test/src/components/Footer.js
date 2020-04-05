import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'

const Footer = (props) => {

  const handleNav = (title) => {
    console.log(title)
    props.onSetState(['title'], title)
  }

  return (
    <div className="m-footer">
      <NavLink to="/index/home" className="m-footer-item" onClick={() => handleNav('小米书城')}>首页</NavLink>
      <NavLink to="/index/my_books" className="m-footer-item" onClick={() => handleNav('我的书包')} >书包</NavLink>
      <NavLink to="/index/me" className="m-footer-item" onClick={() => handleNav('个人中心')} >我的</NavLink>
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