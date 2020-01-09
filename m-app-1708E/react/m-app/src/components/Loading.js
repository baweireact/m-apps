import React, { Component } from 'react'
import { connect } from 'react-redux'

class Loading extends Component {
  render() {
    let { loading, lazyLoading } = this.props
    return (
      <div className={"m-mask m-loading " + (lazyLoading || loading ? 'active' : '')}>
        
      </div>
    )
  }
}

//从仓库里取值，相当于使用vuex时，组件里使用computed取仓库里的值
const mapStateToProps = (state) => {
  return {
    loading: state.getIn(['loading'])
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    //同步，相当于vuex里提交mutation
    onSetState(key, value) {
      dispatch({ type: 'SET_STATE', key, value })
    },
    //异步，相当于vuex里提交action
    onDispatch(action) {
      dispatch(action)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Loading)
