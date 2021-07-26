import React, { Component } from 'react'
import { connect } from 'react-redux'
import Sidebar from '../components/Sidebar'
import List from '../components/List'
import actionCreator from '../store/book/actionCreator'

class Home extends Component {
  async getData() {
    try {
      const result = await fetch('/api/list_all')
      const res = await result.json()
      if (res.code === 200) {

      }
    } catch (error) {
      console.log(error)
    }
  }
  componentDidMount() {
    this.getData()
    //this.props.onDispatch(actionCreator.getListAll())
  }
  render() {
    return (
      <div className="m-center m-home">
        <Sidebar></Sidebar>
        <List></List>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {

  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSetState(key, value) {
      dispatch({type: 'SET_STATE', key, value})
    },
    onDispatch(action) {
      dispatch(action)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
