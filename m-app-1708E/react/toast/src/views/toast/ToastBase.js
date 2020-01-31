import React from 'react'
import { toast } from '../../components/toast'

const ToastBase = () => {
  const handleToast = () => {
    toast({ title: '用户名不存在' })
  }

  return (
    <div className="m-info">
      <div className="m-text">
        调用toast()函数，显示toast，默认1.5s后消失
      </div>
      <div className="m-toolbar">
        <button onClick={() => handleToast()}>toast</button>
      </div>
    </div>
  )
}

export default ToastBase