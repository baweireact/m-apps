import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import Icon from './Icon'

class Bottom extends Component {
  handleNav(title) {
    this.props.onSetState(['title'], title)
  }

  render() {
    return (
      <div className="m-bottom">
        <NavLink to="/index/home" className="m-nav">
          <Icon name="home" className="m-nav-icon"></Icon>
          <div className="m-nav-text">首页</div>
        </NavLink>
        <NavLink to="/index/my_book" className="m-nav">
          <Icon name="shubao" className="m-nav-icon"></Icon>
          <div className="m-nav-text">书包</div>
        </NavLink>
        <NavLink to="/index/me" className="m-nav">
          <Icon name="me" className="m-nav-icon"></Icon>
          <div className="m-nav-text">我的</div>
        </NavLink>                      
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {

  }
}

const mapDispatchToProps = (dispatch) => {
  return {
     onSetState(key, value){
       dispatch({type:'SET_STATE', key, value})
     }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Bottom)
