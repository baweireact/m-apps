import React, { Component } from 'react'
import { connect } from 'react-redux'

class Header extends Component {
  render() {
    const { title } = this.props
    return (
      <div className="m-header">
        {title}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    title: state.getIn(['book', 'title'])
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSetState(key, value) { 
      dispatch({key, value})
    },
    onDispatch(action) {
      dispatch(action)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)