import React from 'react'
import { createPortal } from 'react-dom'

const toast = () => {
  return createPortal(
    <div>
      1
    </div>
  , document.body)
}

export default toast