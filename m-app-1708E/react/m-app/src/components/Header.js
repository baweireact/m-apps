import React, { Component } from 'react'
import { connect } from 'react-redux'

class Header extends Component {
  render() {
    let { title } = this.props
    return (
      <div className="m-header">
        {title}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    title: state.getIn(['title'])
  }
}

export default connect(mapStateToProps)(Header)