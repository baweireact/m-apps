import React, { Component } from 'react'
import { connect } from 'react-redux'
import actionCreator from '../store/actionCreator'

class Sidebar extends Component {
  componentDidMount() {
    this.props.onDispatch(actionCreator.getListAll(1))
  }
  render() {
    let { listAll } = this.props
    let sidebarDom = listAll.map(item => (
      <div key={item.id}>{item.title}</div>
    ))
    return (
      <div className="m-sidebar">
        {sidebarDom}
      </div>
    )
  }
}

//从仓库里取值，相当于使用vuex时，组件里使用computed取仓库里的值
const mapStateToProps = (state) => {
  return {
    listAll: state.listAll
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

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)
