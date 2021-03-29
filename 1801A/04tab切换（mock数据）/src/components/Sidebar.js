import React, { Component } from 'react'

export default class Sidebar extends Component {
  render() {
    let { list, currentId } = this.props
    let listDom = list.map(item => (
      <div key={item.id} 
        className={"m-sidebar-item " + (currentId === item.id ? 'active' : '')}
        onClick={() => this.props.onClick(item.id)}>{item.title}</div>
    ))
    return (
      <div className="m-sidebar">
        {listDom}
      </div>
    )
  }
}
