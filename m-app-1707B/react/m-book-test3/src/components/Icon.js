import React, { Component } from 'react'

export default class Icon extends Component {
  render() {
    const { name, className } = this.props
    return (
      <span className={`icon iconfont icon-${name} m-icon ${className}`} onClick={() => this.props.onClick && this.props.onClick()}></span>
    )
  }
}
