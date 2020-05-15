import React, { Dispatch, ChangeEvent } from 'react'
import { connect } from 'react-redux'
import { IBook, IStore } from '../types'
import actionCreator from '../store/book/actionCreator'

interface IProps {
  book: IBook,
  onSetState: (key: string, value: any) => void
  onDispatch: (action: Function) => void
}

const MyBookItem = (props: IProps) => {
  let { book, onDispatch } = props

  const handleChecked = (id: number, e: ChangeEvent<HTMLInputElement>) => {
    onDispatch(actionCreator.myBooks({ id, operation: 'checked', checked: e.target.checked }, 'patch' ))
  }

  const handleSub = (id: number) => {
    onDispatch(actionCreator.myBooks({ id, operation: 'add' }, 'patch' ))
  }

  const handleInput = (id:number, e:ChangeEvent<HTMLInputElement>) => {
    let count = parseInt(e.target.value.replace(/[^\d]/g, ''))
    if (count === 0) {
      count = 1
    }
    onDispatch(actionCreator.myBooks({ id, operation: 'inputCount', count }, 'patch' ))
  }

  const handleAdd = (id: number) => {
    onDispatch(actionCreator.myBooks({ id, operation: 'add' }, 'patch' ))
  }

  const handleDelete = (ids: number[]) => {
    onDispatch(actionCreator.myBooks({ ids }, 'delete' ))
  }


  return (
    <div className="m-my-books-item">
    <div className="m-my-books-checkbox-wrap" >
      <input type="checkbox" checked={book.checked} onChange={ (e) => handleChecked(book.id, e) } className="m-my-books-checkbox" />
    </div>
    <div className="m-my-books-img-wrap">
      <img src={book.avatar} className="m-my-books-img" alt={book.title}/>
    </div>
    <div className="m-my-books-info">
      <div>{book.title}</div>
      <div>￥{book.price}</div>
      <div className="m-add-info">
        <button className="m-btn" onClick={ () => handleSub(book.id)}>减</button>
        <input type="text" value={book.count} placeholder="数量" className="m-input" onChange={ (e) => handleInput(book.id, e)}/>
        <button className="m-btn" onClick={ () => handleAdd(book.id)} >加</button>
        <button className="m-btn" onClick={ () => handleDelete([book.id])}>删除</button>
      </div>        
    </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(MyBookItem)

