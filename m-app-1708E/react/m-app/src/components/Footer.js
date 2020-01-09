import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import Icon from './Icon'
import { connect } from 'react-redux'
import actionCreator from '../store/actionCreator'

class Footer extends Component {
  componentDidMount() {
    this.props.onDispatch(actionCreator.getMyBook())
  }

  render() {
    let { myBook } = this.props

    return (
      <div className="m-footer">
        <NavLink to="/index/home" className="m-nav-item">
          <Icon type="shouye" className="m-nav-icon"></Icon>
          <div className="m-nav-text">首页</div>
        </NavLink>
        <NavLink to="/index/my_book" className="m-nav-item">
          <span className="m-badge-wrap">
            { myBook.length > 0 && <span className="m-badge">{myBook.length}</span>}
            <Icon type="shubao" className="m-nav-icon"></Icon>
          </span>
          <div className="m-nav-text">书包</div>
        </NavLink>      
        <NavLink to="/index/me" className="m-nav-item">
          <Icon type="wodedangxuan" className="m-nav-icon"></Icon>
          <div className="m-nav-text">我的</div>
        </NavLink>            
      </div>
    )
  }
}

//从仓库里取值，相当于使用vuex时，组件里使用computed取仓库里的值
const mapStateToProps = (state) => {
  return {
    title: state.getIn(['title']),
    myBook: state.getIn(['myBook']).toJS()
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    //同步，相当于vuex里提交mutation
    onSetState(key, value) {
      dispatch({ type: 'SET_STATE', key, value })
    },
    //异步，相当于vuex里提交action
    onDispatch(action) {
      dispatch(action)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Footer)