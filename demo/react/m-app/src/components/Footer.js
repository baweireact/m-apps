import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import Icon from './Icon'
import Badge from './Badge'
import actionCreator from '../store/actionCreator'

const Footer = (props) => {
  let { myBooks } = props
  let count = myBooks.reduce((total, item) => {
    return total + item.count
  }, 0)


  useEffect(() => {
    props.onDispatch(actionCreator.myBooks(null, 'get'))
  }, [])

  return (
    <div className="m-footer">
      <NavLink to="/index/home" className="m-footer-item">
        <Icon name="shouye" className="m-footer-icon"></Icon>
        <div className="m-footer-text">首页</div>
      </NavLink>
      <NavLink to="/index/my_books" className="m-footer-item">
        <Badge count={count}>
          <Icon name="shubao" className="m-footer-icon"></Icon>
        </Badge>
        <div className="m-footer-text">书包</div>
      </NavLink>
      <NavLink to="/index/me" className="m-footer-item">
        <Icon name="wodedangxuan" className="m-footer-icon"></Icon>
        <div className="m-footer-text">我的</div>
      </NavLink>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    myBooks: state.getIn(['myBooks']).toJS()
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSetState(key, value) {
      dispatch({ type: 'SET_STATE', key, value })
    },
    onDispatch(action) {
      dispatch(action)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Footer)
