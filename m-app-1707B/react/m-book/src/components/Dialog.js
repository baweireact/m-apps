import React, { Component } from 'react'

export default class Dialog extends Component {
  render() {
    let { title, visible } = this.props
    return (
      <div className={"m-dialog-wrap " + (visible ? 'active' : '')}>
        <div className="m-dialog">
          <div className="m-dialog-title">{title}</div>
          <div className="m-dialog-content">{this.props.children}</div>
          <div className="m-dialog-footer">
            <button onClick={this.props.onCancel} className="m-dialog-btn">取消</button>
            <button onClick={this.props.onOk} className="m-dialog-btn">确定</button>
          </div>
        </div>
      </div>
    )
  }
}
