import React from 'react'
import ReactDOM, { createPortal } from 'react-dom'
import Toast from './Toast'

const toast = (config = {}) => {
  let dom = document.createElement('div')
  document.body.appendChild(dom)

  setTimeout(() => {
    dom.remove()
    config.onClose && config.onClose()
  }, config.duration || 150000)

  ReactDOM.render(
    <Toast {...config}></Toast>,
    dom
  )
}

export {
  toast
}