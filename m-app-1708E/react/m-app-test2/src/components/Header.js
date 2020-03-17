import React from 'react'
import { connect } from 'react-redux'

const Header = (props) => {
  let { title } = props
  return (
    <div className="m-header">
      {title}
    </div>
  )
}

//取全局store里的数据
const mapStateToProps = (state) => {
  return {
    listAll: state.getIn(['listAll']).toJS(),
    title: state.getIn(['title'])
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

export default connect(mapStateToProps, mapDispatchToProps)(Header)