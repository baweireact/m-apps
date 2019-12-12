import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'

class Home extends Component {
  componentDidMount() {
    axios({
      url: '/api/nav'
    }).then(res => {
      if (res.data.code === 200) {
        this.props.onSetState('list', res.data.data)
      }
    })
  }
  render() {
    let { list } = this.props
    let listDom = list.map(item => (
      <div key={item.id}>{item.title}</div>
    ))
    return (
      <div>
        {listDom}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    list: state.list
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSetState(key, value) {
      dispatch({ type: 'SET_STATE', key, value })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
