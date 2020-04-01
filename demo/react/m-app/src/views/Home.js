import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import Sidebar from '../components/Sidebar'
import List from '../components/List'
import actionCreator from '../store/actionCreator'

const Home = (props) => {

  useEffect(() => {
    props.onDispatch(actionCreator.getList())
  }, [])

  return (
    <div className="m-main m-home">
      <Sidebar></Sidebar>
      <List></List>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
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

export default connect(mapStateToProps, mapDispatchToProps)(Home)
