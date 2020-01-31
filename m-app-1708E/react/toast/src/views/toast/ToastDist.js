import React from 'react'
import { toast } from '../../../dist_npm'
import '../../../dist_npm/main.css'

const ToastDist = () => {
  const handleToast = () => {
    toast({ title: '用户名不存在', duration: 3000 })
  }

  return (
    <div className="m-info">
      <div className="m-text">
        运行yarn build_npm后会通过index_npm.js入口打包toast组件到dist_npm文件夹里，
        这里会引用打包后的文件并测试toast()函数
      </div>
      <div className="m-toolbar">
        <button onClick={() => handleToast()}>toast</button>
      </div>
    </div>
  )
}

export default ToastDist