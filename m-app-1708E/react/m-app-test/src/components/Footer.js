import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'

import Icon from './Icon'

class Footer extends Component {
  handleTitle(title) {
    this.props.onSetState(['title'], title)
  }
  render() {
    return (
      <div className="m-footer">
        <NavLink to="/index/home" className="m-footer-item" onClick={this.handleTitle.bind(this, '小米书城')}>
          <Icon type={'shouye'} className="m-footer-icon"></Icon>
          <div className="m-footer-text">首页</div>
        </NavLink>
        <NavLink to="/index/my_book" className="m-footer-item" onClick={this.handleTitle.bind(this, '书包')}>
          <Icon type="shubao" className="m-footer-icon"></Icon>
          <div className="m-footer-text">书包</div>
        </NavLink>
        <NavLink to="/index/me" className="m-footer-item" onClick={this.handleTitle.bind(this, '个人中心')}>
          <Icon type="wode" className="m-footer-icon"></Icon>
          <div className="m-footer-text">我的</div>
        </NavLink>        
      </div>
    )
  }
}

//从仓库里取值，相当于使用vuex时，组件里使用computed取仓库里的值
const mapStateToProps = (state) => {
  return {
    title: state.title
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    //同步，相当于提交mutation
    onSetState(key, value) {
      dispatch({ type: 'SET_STATE', key, value })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Footer)

