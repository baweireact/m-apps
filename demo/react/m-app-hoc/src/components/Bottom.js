import React, { Component } from 'react'

export default class Bottom extends Component {
  render() {
    let { list } = this.props
    let listDom = list.map(item => (
      <div key={item.id}>
        姓名：{item.name},性别：{item.gender}
      </div>
    ))
    return (
      <div>
        {listDom}
      </div>
    )
  }
}
