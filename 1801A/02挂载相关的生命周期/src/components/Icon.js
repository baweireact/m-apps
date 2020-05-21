import React, { Component } from 'react'

export default class Icon extends Component {

  //挂载前
  componentWillMount() {
    console.log('3.子组件挂载前（废弃了）')
  }

  //挂载完，真实dom渲染完
  componentDidMount() {
    console.log('5.子组件挂载完')
  }

  componentWillUnmount() {
    console.log('7.子组件卸载前')
  }

  render() {
    console.log('4.渲染子组件')
    return (
      <div>
        子组件
      </div>
    )
  }
}
