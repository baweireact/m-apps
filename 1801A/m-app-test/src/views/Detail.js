import React, { Component } from 'react'

export default class Detail extends Component {
  render() {
    //获取动态路由
    let { id } = this.props.match.params
    return (
      <div>
        详情{id}
      </div>
    )
  }
}
