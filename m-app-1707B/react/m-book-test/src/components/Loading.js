import React, { Component } from 'react'
import { connect } from 'react-redux'

class Loading extends Component {
  render() {
    let { loading, lazyLoading } = this.props
    return (
      <div className={"m-loading " + (loading || lazyLoading ? 'active' : '')}>
        
      </div>
    )
  }
}

//相当于vuex里的computed计算属性
const mapStateToProps = (state) => {
  //state = state.toJS()  //把immutable对象转换为js对象
  return {
    loading: state.getIn(['loading'])
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

export default connect(mapStateToProps, mapDispatchToProps)(Loading)
