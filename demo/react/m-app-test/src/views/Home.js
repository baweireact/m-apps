import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import actionCreator from '../store/task/actionCreator'
import Sidebar from '../components/Sidebar'
import List from '../components/List'
import Api from '../api'

const Home = (props) => {
  useEffect(() => {
    Api.list().then(res => {
      if (res.code === 200) {
        props.onSetState(['list'], res.data)
      }
    })
    //props.onDispatch(actionCreator.list())
  }, [])

  return (
    <div className="m-main m-home">
      <Sidebar></Sidebar>
      <List></List>
    </div>
  )
}

//相当于vuex里计算属性，取值
const mapStateToProps = (state) => {
  return {
    title: state.getIn(['title'])
  }
}

//相当于提交mutation，改值
const mapDispatchToProps = (dispatch) => {
  return {
    //同步
    onSetState(key, value) {
      dispatch({type: 'SET_STATE', key, value})
    },
    //异步
    onDispatch(action) {
      dispatch(action)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
