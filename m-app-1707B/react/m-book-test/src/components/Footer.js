import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import actionCreator from '../store/actionCreator'
import Icon from './Icon'

class Footer extends Component {
  handleTitle(title) {
    this.props.onSetState(['title'], title)
  }
  componentDidMount() {
    this.props.onDispatch(actionCreator.getMyBook())
  }
  render() {
    let { myBook } = this.props
    return (
      <div className="m-footer">
        <NavLink to="/index/home" className="m-nav-item" onClick={this.handleTitle.bind(this, '小米书城')}>
          <div>
            <Icon type="shouye" className="m-nav-icon"></Icon>
          </div>
          <div className="m-nav-text">
            首页
          </div>
        </NavLink>
        <NavLink to="/index/my_book" className="m-nav-item" onClick={this.handleTitle.bind(this, '书包')}>
          <div>
            <span>
              { myBook.length > 0 && <span>{myBook.length}</span>}
            </span>
            <Icon type="shubao" className="m-nav-icon"></Icon>
          </div>
          <div className="m-nav-text">
            书包
          </div>
        </NavLink>
        <NavLink to="/index/me" className="m-nav-item" onClick={this.handleTitle.bind(this, '我的')}>
          <div>
            <Icon type="wodedangxuan" className="m-nav-icon"></Icon>
          </div>
          <div className="m-nav-text">
            我的
          </div>
        </NavLink>
      </div>
    )
  }
}

//相当于vuex里的computed计算属性
const mapStateToProps = (state) => {
  //state = state.toJS()  //把immutable对象转换为js对象
  return {
    myBook: state.getIn(['myBook']).toJS()
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    //相当于vuex里提交mutation
    onSetState(key, value) {
      dispatch({ type: 'SET_STATE', key, value })
    },
    //相当于vuex里的提交action
    onDispatch(action) {
      dispatch(action)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Footer)
