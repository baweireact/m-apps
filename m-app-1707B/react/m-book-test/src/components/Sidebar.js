import React, { Component } from 'react'
import { connect } from 'react-redux'
import actionCreator from '../store/actionCreator'

class Sidebar extends Component {
  handleNav(id) {
    this.props.onSetState(['currentId'], id)
  }
  componentDidMount() {
    this.props.onDispatch(actionCreator.getListAll())
  }
  render() {
    let { listAll, currentId } = this.props
    //作业，用for循环做一下
    let listAllDom = listAll.map(item => (
      <div 
        key={item.id} 
        className={"m-sidebar-item " + (currentId === item.id ? "active" : '')}
        onClick={this.handleNav.bind(this, item.id)}>
        {item.title}
      </div>
    ))
    return (
      <div className="m-sidebar">
        {listAllDom}
      </div>
    )
  }
}

//相当于vuex里的computed计算属性
const mapStateToProps = (state) => {
  state = state.toJS()  //把immutable对象转换为js对象
  return {
    listAll: state.listAll,
    currentId: state.currentId
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

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)
