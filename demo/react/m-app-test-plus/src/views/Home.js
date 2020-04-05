import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import actionCreator from '../store/actionCreator'
import Sidebar from '../components/Sidebar'
import List from '../components/List'

const Home = (props) => {

  useEffect(() => {
    props.onDispatch(actionCreator.list())
    //props.onSetState(['title'], '小米书城')
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
