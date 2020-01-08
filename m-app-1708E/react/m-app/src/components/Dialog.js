import React from 'react'
import Icon from './Icon'

const Dialog = (props) => {
  let { visible, title, children } = props
  return (
    <div className={"m-mask " + (visible ? 'active' : '')}>
      <div className="m-dialog">
        <div className="m-dialog-header">
          <span className="m-dialog-header-text">{title}</span>
          <Icon type="guanbi" className="m-dialog-header-icon" onClick={props.onCancel}></Icon>
        </div>
        <div className="m-dialog-content">{children}</div>
        <div className="m-dialog-footer">
          <button className="m-btn" onClick={props.onCancel}>取消</button>
          <button className="m-btn" onClick={props.onOk}>确定</button>
        </div>
      </div>
    </div>
  )
}

export default Dialog