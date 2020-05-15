import React, { Dispatch, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { IStore, IBook } from '../types'
import Icon from './Icon'
import Badge from './Badge'
import actionCreator from '../store/book/actionCreator'

interface IProps {
  myBooks: IBook[],
  onSetState: (key: string, value: any) => void
  onDispatch: (action: Function) => void
}

const Footer = (props: IProps) => {
  let { myBooks, onDispatch } = props

  let count = myBooks.reduce((total, item) => {
    return total + item.count
  }, 0)

  const handleNav = (title: string) => {
    //props.onSetState('title', title)
  }

  useEffect(() => {
    onDispatch(actionCreator.myBooks())
  }, [onDispatch])

  return (
    <div className="m-footer">
      <NavLink to="/index/home" className="m-footer-item" onClick={() => handleNav('小米书城')}>
        <Icon name="home" className="m-footer-icon"></Icon>
        <div className="m-footer-text">首页</div>
      </NavLink>
      <NavLink to="/index/my_books" className="m-footer-item" onClick={() => handleNav('我的书包')}>
        <Badge count={count}>
          <Icon name="shubao" className="m-footer-icon"></Icon>
        </Badge>
        <div className="m-footer-text">书包</div>
      </NavLink>
      <NavLink to="/index/me" className="m-footer-item" onClick={() => handleNav('个人中心')}>
        <Icon name="me" className="m-footer-icon"></Icon>
        <div className="m-footer-text">我的</div>
      </NavLink>
    </div>
  )
}

const mapStateToProps = (state: IStore) => {
  return {
    myBooks: state.book.myBooks
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
