import React, { useState, Dispatch, ChangeEvent } from 'react'
import { connect } from 'react-redux'
import { IStore, IBook } from '../types'
import actionCreator from '../store/book/actionCreator'
import MyBookItem from '../components/MyBookItem'
import Dialog from '../components/Dialog'

interface IProps {
  myBooks: IBook[],
  onSetState: (key: string, value: any) => void
  onDispatch: (action: Function) => void
}
const MyBooks = (props: IProps) => {
  let { myBooks, onDispatch } = props
  const [ visible, setVisible ] = useState(false)

  const handleShowDialog = () => {
    if (myBooks.filter(item => item.checked).length === 0) {
      //this.$message({ message: '请选择要删除的商品哦~', duration: 2000 })
      alert('请选择要删除的商品哦~')
    } else {
      setVisible(true)
    }
  }

  const handleCancel = () => {
    setVisible(false)
  }

  const handleDeleteChecked = () => {
    let ids = myBooks.filter(item => item.checked).map(item => item.id)
    onDispatch(actionCreator.myBooks({ ids }, 'delete', () => {
      handleCancel()
    } ))
  }

  const handleCheckedAll = (e: ChangeEvent<HTMLInputElement>) => {
    onDispatch(actionCreator.myBooks({ operation: 'checkedAll', checked: e.target.checked }, 'patch' ))
  }

  let totalPrice = myBooks.filter(item => item.checked).reduce((total, item) => total + item.count * item.price, 0)
  let checkedAll = myBooks.every(item => item.checked)

  let bookListDom = myBooks.map(item => (
    <MyBookItem key={item.id} book={item}></MyBookItem>
  ))

  return (
    <div className="m-main">
      {
        myBooks.length > 0 ?
        <div className="m-my-books">
          <div className="m-my-books-content">
            {bookListDom}
          </div>
          <div className="m-my-books-footer">
            <label>
              <input type="checkbox" checked={checkedAll} onChange={ (e) => handleCheckedAll(e)}/>
              <span>全选</span>
            </label>
            <button onClick={ () => handleShowDialog() }>删除</button>
            <span>
              合计: ￥{totalPrice}
            </span>
          </div>
        </div>
        :
        <div className="m-my-books-empty">
          购物车空空如也~
        </div>
      }
      <Dialog visible={visible} title="删除" onOk={() => handleDeleteChecked()} onCancel={() => handleCancel()}>
        <div className="m-my-books-delete-dialog-info">
          您确定要删除选中的商品吗？
        </div>
      </Dialog>
    </div>
  )
}

const mapStateToProps = (state: IStore) => {
  return {
    myBooks: state.book.myBooks
  }
}

const mapDispatchToProps = (dispatch: Dispatch<any>) => {
  return {
    onSetState(key: string, value: any) {
      dispatch({ type: 'SET_STATE', key, value })
    },
    onDispatch(action: Function) {
      dispatch(action)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyBooks)
