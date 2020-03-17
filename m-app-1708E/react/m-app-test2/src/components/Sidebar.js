import React, { useState, useEffect } from 'react'
import actionCreator from '../store/actionCreator'
import { connect } from 'react-redux'
import Api from '../api'

const Sidebar = (props) => {
  //相当于componentDidMount
  useEffect(() => {
    props.onDispatch(actionCreator.getListAll())
    // Api.getListAll().then(res => {
    //   if (res.code === 200) {
    //     props.onSetState(['listAll'], res.data)
    //   }
    // })
  }, [])

  const handleNav = (id) => {
    console.log(id)
    props.onSetState(['currentId'], id)
  }

  let { listAll, currentId } = props
  let sidebarDom = listAll.map(item => (
    <div key={item.id} 
      className={"m-sidebar-item " + (currentId === item.id ? 'active' : '')} 
      onClick={() => handleNav(item.id)} >{item.title}</div>
  ))

  return (
    <div className="m-sidebar">
      {sidebarDom}
    </div>
  )
}

//取全局store里的数据
const mapStateToProps = (state) => {
  return {
    listAll: state.getIn(['listAll']).toJS(),
    currentId: state.getIn(['currentId'])
  }
}

//改全局store里的数据
const mapDispatchToProps = (dispatch) => {
  return {
    //同步
    onSetState(key, value) {
      dispatch({ type: 'SET_STATE', key, value })
    },
    //异步
    onDispatch(action) {
      dispatch(action)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)