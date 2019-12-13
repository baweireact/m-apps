import React, { Component } from 'react'
import { connect } from 'react-redux'

class Loading extends Component {
  render() {
    let { loading, lazyLoading } = this.props
    return (
      <div className={ "m-loading " + (loading || lazyLoading ? 'active' : '') }>
        
      </div>
    )
  }
}

//相当于vue里的computed计算属性获取store里的数据
const mapStateToProps = (state) => {
  state = state.toJS()
  return {
    loading: state.loading
  }
}

//onSetState相当于vuex里的commit提交mutation， onDispatcg相当于vuex里的dispatch提交action
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

export default connect(mapStateToProps, mapDispatchToProps)(Loading)
