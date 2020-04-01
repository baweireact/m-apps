import React from 'react'

const Dialog = (props) => {
  let { visible, title } = props
  return (
    <div className={"m-dialog-wrap " + (visible ? 'active' : '')}>
      <div className="m-dialog">
        <div className="m-dialog-header">{title}</div>
        <div className="m-dialog-content"></div>
        <div className="m-dialog-footer">
          <button className="m-btn" onClick={props.onCancel}>取消</button>
          <button className="m-btn">确定</button>
        </div>
      </div>
    </div>
  )
}

export default Dialog
