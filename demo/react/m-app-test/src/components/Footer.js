import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import Icon from './Icon'
import actionCreator from '../store/task/actionCreator'
import Badge from './Badge'

const Footer = (props) => {
  let { myBooks } = props

  let count = myBooks.reduce((total, book) => {
    return total + book.count
  }, 0)

  console.log(count)

  useEffect(() => {
    console.log('挂载完')
    props.onDispatch(actionCreator.myBooks({}, 'get'))
  }, [])

  return (
    <div className="m-footer">
      <NavLink to="/index/home" className="m-footer-item">
        <Icon name="shouye" className="m-footer-item-icon"></Icon>
        <div className="m-footer-item-text">首页</div>
      </NavLink>
      <NavLink to="/index/my_books" className="m-footer-item" >
        <Badge count={count}>
          <Icon name="shubao" className="m-footer-item-icon"></Icon>
        </Badge>
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
    myBooks: state.getIn(['task', 'myBooks']).toJS()
  }
}

//相当于提交mutation，改值
const mapDispatchToProps = (dispatch) => {
  return {
    onSetState(key, value) {
      dispatch({type: 'SET_STATE', key, value})
    },
    //异步
    onDispatch(action) {
      dispatch(action)
    }
}
}

export default connect(mapStateToProps, mapDispatchToProps)(Footer)