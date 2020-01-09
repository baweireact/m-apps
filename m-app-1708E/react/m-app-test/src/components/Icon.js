import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Icon extends Component {
  render() {
    let { type, className } = this.props
    return (
      <span className={`icon iconfont icon-${type} ${className ? className : ''}`} onClick={this.props.onClick}></span>
    )
  }
}

Icon.propTypes = {
  type: PropTypes.string
}
