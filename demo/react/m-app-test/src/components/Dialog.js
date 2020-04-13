import React, { Component } from 'react'

export default class Dialog extends Component {
  render() {
    let { visible, title, children } = this.props
    return (
      <div className={`m-dialog-wrap ${visible ? 'active' : ''}`}>
        <div className="m-dialog">
          <div className="m-dialog-header">
            {title}
          </div>
          <div className="m-dialog-content">
            {children}
          </div>
          <div className="m-dialog-footer">
            <button className="m-btn" onClick={this.props.onCancel}>取消</button>
            <button className="m-btn" onClick={this.props.onOk}>确定</button>
          </div>
        </div>
      </div>
    )
  }
}
