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
    let listAllDom = listAll.map(item => (
      <a 
        key={item.id} 
        href={'#' + item.id}
        onClick={this.handleNav.bind(this, item.id)}
        className={"m-sidebar-item " + (currentId === item.id ? 'active' : '')}>
        {item.title}
      </a>
    ))
    return (
      <div className="m-sidebar">
        {listAllDom}
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  state = state.toJS()
  return {
    listAll: state.listAll,
    currentId: state.currentId
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