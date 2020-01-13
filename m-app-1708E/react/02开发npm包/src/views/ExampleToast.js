import React from 'react'
import { toast } from '../components/toast'

const ExampleToast = () => {
  const handleToast = () => {
    //toast()
    toast({ title: '用户名不存在' })
  }

  return (
    <div className="m-info">
      <div>
        调用toast()函数，显示toast，默认1.5s后消失
      </div>
      <button onClick={() => handleToast()}>toast</button>
    </div>
  )
}

export default ExampleToast