import React from 'react'
import './index.css'

const Toast = (props) => {
  let { title = "toast" } = props
  return (
    <div className="m-toast-mask">
      <div className="m-toast">{title}</div>
    </div>
  )
}

export default Toast