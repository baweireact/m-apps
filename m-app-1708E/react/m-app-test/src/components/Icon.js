import React, { Component } from 'react'

export default class Icon extends Component {
  render() {
    let { type } = this.props
    return (
      <span className={`icon iconfont icon-${type}`}></span>
    )
  }
}
