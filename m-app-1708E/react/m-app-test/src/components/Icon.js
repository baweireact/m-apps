import React, { Component } from 'react'

export default class Icon extends Component {
  render() {
    let { type, className } = this.props
    return (
      <span className={`icon iconfont icon-${type} ${className ? className : ''}`} onClick={this.props.onClick}></span>
    )
  }
}
