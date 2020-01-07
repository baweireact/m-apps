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
    document.getElementById(id).scrollIntoView({ block: 'start', behavior: 'smooth' })
  }
  componentDidMount() {
    this.props.onDispatch(actionCreator.getAllList())
  }
  render() {
    let { allList, currentId } = this.props
    let sidebarDom = allList.map(item => (
      <div key={item.id} className={"m-sidebar-item " + (currentId === item.id ? 'active' : '')} onClick={this.handleNav.bind(this, item.id)}>{item.title}</div>
    ))
    return (
      <div className="m-sidebar">
        {sidebarDom}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    allList: state.getIn(['allList']).toJS(),
    currentId: state.getIn(['currentId'])
  }
}

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

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)
