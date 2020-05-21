import React, { Component } from 'react'

export default class Money extends Component {
  render() {
    return (
      <div className="m-money">
        <div className="m-left">
          <button onClick={() => this.props.onAdd(50)}>50</button>
          <button onClick={() => this.props.onAdd(100)}>100</button>
          <button onClick={() => this.props.onAdd(200)}>200</button>
          <button onClick={() => this.props.onAdd(500)}>500</button>
        </div>
        <div className="m-right">
          <button onClick={() => this.props.onClear()}>{this.props.money}</button>
        </div>
      </div>
    )
  }
}
