import React from 'react'
import './index.css'

const Toast = (props) => {
  let { title } = props.config
  return (
    <div className="m-toast-mask">
      <div className="m-toast">{title}</div>
    </div>
  )
}

export default Toast