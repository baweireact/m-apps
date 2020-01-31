import React from 'react'
import './index.css'

const Dialog = (props) => {
  let { visible, title, children } = props 
  return (
    <div className={"m-dialog-mask " + (visible ? 'active' : '') }>
      <div className="m-dialog">
        <div className="m-dialog-header">{title}</div>
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