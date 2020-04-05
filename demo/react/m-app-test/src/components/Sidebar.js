import React from 'react'
import { connect } from 'react-redux'

const Sidebar = (props) => {
  let { list, currentId } = props

  const handleNav = (id) => {
    props.onSetState(['currentId'], id)
    //https://developer.mozilla.org/zh-CN/docs/Web/API/Element/scrollIntoView
    document.getElementById(id).scrollIntoView({ block: 'start', behavior: 'smooth' })
  }

  let listDom = list.map(item => (
    <div key={item.id} className={"m-sidebar-item " + (currentId === item.id ? 'active' : '')} onClick={() => handleNav(item.id)}>
      {item.title}
    </div>
  ))

  return (
    <div className="m-sidebar">
      {listDom}
    </div>
  )
}

//相当于vuex里计算属性，取值
const mapStateToProps = (state) => {
  return {
    list: state.getIn(['list']).toJS(),
    currentId: state.getIn(['currentId'])
  }
}

//相当于提交mutation，改值
const mapDispatchToProps = (dispatch) => {
  return {
    onSetState(key, value) {
      dispatch({type: 'SET_STATE', key, value})
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)
