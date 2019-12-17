import React, { Component } from 'react'
import { connect } from 'react-redux'

class Result extends Component {
  render() {
    let { yes, no } = this.props
    return (
      <div>
        对：{yes}，错：{no}
      </div>
    )
  }
}

//相当于vuex里的computed计算属性
const mapStateToProps = (state) => {
  //state = state.toJS()  //把immutable对象转换为js对象
  return {
    yes: state.getIn(['yes']),
    no: state.getIn(['no'])
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    //相当于vuex里提交mutation
    onSetState(key, value) {
      dispatch({ type: 'SET_STATE', key, value })
    },
    //相当于vuex里的提交action
    onDispatch(action) {
      dispatch(action)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Result)

