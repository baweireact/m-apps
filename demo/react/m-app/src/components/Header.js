import React from 'react'
import { connect } from 'react-redux'

const Header = (props) => {
  let { title } = props
  return (
    <div className="m-header">{title}</div>
  )
}

const mapStateToProps = (state) => {
  return {
    title: state.getIn(['title'])
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSetState(key, value) {
      dispatch({ type: 'SET_STATE', key, value })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)