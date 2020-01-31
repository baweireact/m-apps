import React, { useState } from 'react'
import Dialog from '../../components/dialog/Dialog'

const DialogBase = () => {
  const [ visible, setVisible ] = useState(false)

  const handleShowDialog = () => {
    setVisible(true)
  }

  const handleHideDialog = () => {
    setVisible(false)
  }

  const handleOk = () => {
    handleHideDialog()
  }

  return (
    <div className="m-info">
      <div className="m-text">
        对话框组件测试
      </div>
      <div className="m-toolbar">
        <button onClick={() => handleShowDialog()}>dialog</button>
      </div>
      <Dialog 
        visible={visible}
        title="标题"
        onCancel={() => handleHideDialog()}
        onOk={ () => handleOk() }
        >
          <div>
            你确定要删除选中的商品吗？
          </div>
        </Dialog>
    </div>
  )
}

export default DialogBase