import React, { Component } from 'react'

export default class Icon extends Component {
  render() {
    let { name } = this.props
    return (
      <div onClick={() => this.props.onClick(2)}>
        子组件:{name}
      </div>
    )
  }
}
