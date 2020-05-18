import React, { Component } from 'react'

export default class Icon extends Component {

  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.visible !== nextProps.visible) {
      return true
    } else {
      return false
    }
  }

  render() {
    let { visible } = this.props
    console.log('渲染子组件')
    return (
      <div>
        子组件:{visible ? '显示' : '隐藏' }
      </div>
    )
  }
}
