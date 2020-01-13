import React from 'react'
import { toast } from 'toast-react-xu'
import 'toast-react-xu/dist_npm/main.css'

const ExampleToast = () => {
  const handleToast = () => {
    //toast()
    toast({ title: '用户名不存在' })
  }

  return (
    <div className="m-info">
      <div>
        运行npm publish命令把dist_npm文件夹以及没有被.npmignore忽略的文件提交的npm服务器上，
        运行 yarn add toast-react-xu --dev安装自己开发的toast组件，并测试
      </div>
      <button onClick={() => handleToast()}>toast</button>
    </div>
  )
}

export default ExampleToast