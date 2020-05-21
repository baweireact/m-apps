import React, { Component } from 'react'

export default class Icon extends Component {

  componentWillUpdate() {
    console.log('4.子组件更新前')
  }

  componentDidUpdate() {
    console.log('5.子组件更新完')
  }

  render() {
    console.log('2.渲染子组件')
    return (
      <div>
        子组件
      </div>
    )
  }
}
