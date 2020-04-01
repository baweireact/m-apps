import React from 'react'
import { connect } from 'react-redux'

let timer
const Sidebar = (props) => {
  let { list, currentId } = props

  const handleNav = (id) => {
    props.onSetState(['currentId'], id)
    props.onSetState(['isRealScroll'], false)

    clearTimeout(timer)
    timer = setTimeout(() => {
      props.onSetState(['isRealScroll'], true)
    }, 1000)

    document.getElementById(id).scrollIntoView({ block: 'start', behavior: 'smooth' })
  }

  let sidebarDom = list.map(item => (
    <div key={item.id} className={"m-sidebar-item " + (currentId === item.id ? 'active' : '') } onClick={ () => handleNav(item.id)}>
      {item.title}
    </div>
  ))
  return (
    <div className="m-sidebar">
      {sidebarDom}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    list: state.getIn(['list']).toJS(),
    currentId: state.getIn(['currentId'])
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSetState(key, value) {
      dispatch({ type: 'SET_STATE', key, value })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)
