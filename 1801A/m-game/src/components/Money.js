import React, { Component } from 'react'

export default class Money extends Component {

  handleDrag() {
    console.log('拖拽')
    this.props.onClear()
  }
  render() {
    return (
      <div className="m-money">
        <div className="m-select-money">
          <button onClick={() => this.props.onAdd(50)}>50</button>
          <button onClick={() => this.props.onAdd(100)}>100</button>
          <button onClick={() => this.props.onAdd(200)}>200</button>
          <button onClick={() => this.props.onAdd(500)}>500</button>
        </div>
        <div className="m-total-money">
          <div
            className="m-total-money-text" 
            draggable={'true'} 
            onDragEnd={() => this.handleDrag() } 
            onTouchEnd={() => this.handleDrag()}
            onClick={() => this.props.onClear()}>{this.props.money}</div>
        </div>
      </div>
    )
  }
}
