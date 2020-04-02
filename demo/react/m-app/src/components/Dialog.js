import React from 'react'
import Icon from './Icon'

const Dialog = (props) => {
  let { visible, title, children } = props
  return (
    <div className={"m-dialog-wrap " + (visible ? 'active' : '')}>
      <div className="m-dialog">
        <div className="m-dialog-header">
          <div className="m-dialog-title" >{title}</div>
          <Icon name="guanbi" className="m-dialog-close" onClick={props.onCancel}></Icon>
        </div>
        <div className="m-dialog-content">
          {children}
        </div>
        <div className="m-dialog-footer">
          <button className="m-btn" onClick={props.onCancel}>取消</button>
          <button className="m-btn">确定</button>
        </div>
      </div>
    </div>
  )
}

export default Dialog
