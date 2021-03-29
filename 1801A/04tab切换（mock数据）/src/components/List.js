import React, { Component } from 'react'

export default class List extends Component {
  render() {
    let { currentList } = this.props

    let currentListDom = currentList.map(item => (
      <div key={item.id} className="m-list-item">
        <img src={item.avatar} className="m-img" alt={item.title}></img>
        <div className="m-info">{item.title}</div>
      </div>
    ))

    return (
      <div className="m-list">
        {currentListDom}
      </div>
    )
  }
}
