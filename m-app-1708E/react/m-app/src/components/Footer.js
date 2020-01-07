import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import Icon from './Icon'
import { connect } from 'react-redux'

class Footer extends Component {
  handleNav(title) {
    this.props.onSetState(['title'], title)
  }
  render() {
    return (
      <div className="m-footer">
        <NavLink to="/index/home" className="m-nav-item" onClick={this.handleNav.bind(this, '小米书城')}>
          <Icon type="shouye" className="m-nav-icon"></Icon>
          <div className="m-nav-text">首页</div>
        </NavLink>
        <NavLink to="/index/my_book" className="m-nav-item" onClick={this.handleNav.bind(this, '书包')}>
          <span><Icon type="shubao" className="m-nav-icon"></Icon></span>
          <div className="m-nav-text">书包</div>
        </NavLink>      
        <NavLink to="/index/me" className="m-nav-item" onClick={this.handleNav.bind(this, '个人中心')}>
          <Icon type="wodedangxuan" className="m-nav-icon"></Icon>
          <div className="m-nav-text">我的</div>
        </NavLink>            
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    title: state.getIn(['title'])
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSetState(key, value) {
      dispatch({ type: 'SET_STATE', key, value })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Footer)