import React from 'react'
import { toast } from '../../dist_npm'
//import '../../dist_npm/main.css'

const ExampleToast = () => {
  const handleToast = () => {
    //toast()
    toast({ title: '用户名不存在' })
  }

  return (
    <div className="m-info">
      <div>
        运行yarn build_npm后会通过index_npm.js入口打包toast组件到dist_npm文件夹里，
        这里会引用打包后的文件并测试toast()函数
      </div>
      <button onClick={() => handleToast()}>toast</button>
    </div>
  )
}

export default ExampleToast