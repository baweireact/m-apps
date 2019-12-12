import React, { Component } from 'react'

export default class Dialog extends Component {
  render() {
    let { visible, title } = this.props
    return (
      <div className={"m-dialog-wrap " + (visible ? 'active' : '')}>
        <div className="m-dialog">
          <div className="m-dialog-header">{title}</div>
          <div className="m-dialog-content">{this.props.children}</div>
          <div className="m-dialog-footer">
            <button onClick={this.props.onCancel} className="m-btn">取消</button>
            <button onClick={this.props.onOk} className="m-btn">确定</button>
          </div>
        </div>
      </div>
    )
  }
}
