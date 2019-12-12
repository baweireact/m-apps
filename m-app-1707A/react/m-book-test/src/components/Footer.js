import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import Icon from '../components/Icon'
import actionCreator from '../store/actionCreator'

class Footer extends Component {
  handleNav(title) {
    this.props.onSetState(['title'], title)
  }
  componentDidMount() {
    this.props.onDispatch(actionCreator.getMyBook())
  }
  render() {
    let { myBook } = this.props
    return (
      <div className="m-footer">
        <NavLink to="/index/home" className="m-nav-item" onClick={this.handleNav.bind(this, '小米书城')}>
          <div><Icon type="shouye" className="m-nav-icon"></Icon></div>
          <div className="m-nav-text">首页</div>
        </NavLink>
        <NavLink to="/index/my_book" className="m-nav-item" onClick={this.handleNav.bind(this, '书包')}>
          <div>
            <span className="m-badge-wrap">
              {
                myBook.length > 0 && <span className="m-badge">{myBook.length}</span>
              }
              <Icon type="shubao" className="m-nav-icon"></Icon>
            </span>
          </div>
          <div className="m-nav-text">书包</div>          
        </NavLink>
        <NavLink to="/index/me" className="m-nav-item" onClick={this.handleNav.bind(this, '我的')}>
          <div><Icon type="wodedangxuan" className="m-nav-icon"></Icon></div>
          <div className="m-nav-text">我的</div>             
        </NavLink>
      </div>
    )
  }
}

//相当于vue里的computed计算属性获取store里的数据
const mapStateToProps = (state) => {
  return {
    title: state.getIn(['title']),
    myBook: state.getIn(['myBook']).toJS()
  }
}

//onSetState相当于vuex里的commit提交mutation， onDispatcg相当于vuex里的dispatch提交action
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
