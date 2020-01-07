import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Icon extends Component {
  // static defaultProps = {
  //   type: 'xingxing'
  // }
  render() {
    let { type, className } = this.props
    return (
      <span className={`icon iconfont icon-${type} ${className ? className : ''}`} onClick={this.props.onClick}></span>
    )
  }
}

Icon.propTypes = {
  type: PropTypes.string,
  className: PropTypes.string
}

Icon.defaultProps = {
  type: 'shubao'
}
