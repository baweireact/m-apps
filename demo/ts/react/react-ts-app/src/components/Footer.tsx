import React, { Dispatch } from 'react'
import { NavLink } from 'react-router-dom'
import Icon from './Icon'
import { connect } from 'react-redux'

interface IProps {
  onSetState: (key: string, value: any) => void
  onDispatch: (action: Function) => void
}

const Footer = (props: IProps) => {

  const handleNav = (title: string) => {
    //props.onSetState('title', title)
  }

  return (
    <div className="m-footer">
      <NavLink to="/index/home" className="m-footer-item" onClick={() => handleNav('小米书城')}>
        <Icon name="home" className="m-footer-icon"></Icon>
        <div className="m-footer-text">首页</div>
      </NavLink>
      <NavLink to="/index/my_books" className="m-footer-item" onClick={() => handleNav('我的书包')}>
        <Icon name="shubao" className="m-footer-icon"></Icon>
        <div className="m-footer-text">书包</div>
      </NavLink>
      <NavLink to="/index/me" className="m-footer-item" onClick={() => handleNav('个人中心')}>
        <Icon name="me" className="m-footer-icon"></Icon>
        <div className="m-footer-text">我的</div>
      </NavLink>
    </div>
  )
}

const mapStateToProps = () => {
  return {
  }
}

const mapDispatchToProps = (dispatch: Dispatch<any>) => {
  return {
    onSetState(key: string, value: any) {
      dispatch({ type: 'SET_STATE', key, value })
    },
    onDispatch(action: Function) {
      dispatch(action)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Footer)
