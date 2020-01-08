import React, { Component } from 'react'
import { connect } from 'react-redux'
import actionCreator from '../store/actionCreator'

let timer
class Sidebar extends Component {
  handleNav(id) {
    this.props.onSetState(['currentId'], id)
    this.props.onSetState(['isRealScroll'], false)
    clearTimeout(timer)
    timer = setTimeout(() => {
      this.props.onSetState(['isRealScroll'], true)
    }, 1000)
    //https://developer.mozilla.org/zh-CN/docs/Web/API/Element/scrollIntoView
    document.getElementById(id).scrollIntoView({ block: "start", behavior: 'smooth' })
  }
  componentDidMount() {
    this.props.onDispatch(actionCreator.getListAll(1))
  }
  render() {
    let { listAll, currentId } = this.props
    let sidebarDom = listAll.map(item => (
      <div 
        key={item.id} 
        onClick={() => this.handleNav(item.id)}
        className={"m-sidebar-item " + (item.id === currentId ? 'active' : '')}>{item.title}</div>
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
    listAll: state.getIn(['listAll']).toJS(),
    currentId:state.getIn(['currentId'])
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
