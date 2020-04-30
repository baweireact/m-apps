import React, { Dispatch, useState, useEffect, MouseEvent, ChangeEvent } from 'react'
import { connect } from 'react-redux'
import { withRouter, RouteComponentProps } from 'react-router-dom'
import { IStore, IList, IBook } from '../types'
import Stars from './Stars'
import Dialog from './Dialog'
import actionCreator from '../store/book/actionCreator'

interface IProps extends RouteComponentProps {
  list: IList[],
  isRealScroll: boolean,
  onSetState: (key: string, value: any) => void,
  onDispatch: (action: Function) => void
}

let topArr:number[]

const List = (props: IProps) => {
  let { list, isRealScroll } = props
  const [ visible, setVisible ] = useState<boolean>(false)
  let [ book, setBook ] = useState<IBook>({
    checked: true,
    count: 1,
    id: 1,
    title: '',
    avatar: '',
    price: 0,
    stars: 0
  })

  const handleShowDialog = (e: MouseEvent, book: any) => {
    e.stopPropagation()
    book.checked = true
    book.count = 1
    setBook(book)
    setVisible(true)
  }

  const handleInput = (e:ChangeEvent<HTMLInputElement>) => {
    let count = parseInt(e.target.value.replace(/[^\d]/g, ''))
    if (count === 0) {
      count = 1
    }
    book.count = count
    setBook({...book})
  }

  const handleAdd = () => {
    book.count++
    setBook({...book})
  }

  const handleSub = () => {
    if (book.count > 1) {
      book.count--
      setBook({...book})
    }
  }

  const handleAddToMyBooks = () => {
    props.onDispatch(actionCreator.myBooks({book}, 'post', handleCancel))
  }

  const handleCancel = () => {
    setVisible(false)
  }

  const handleDetail = (id: number) => {
    props.history.push(`/detail/${id}`)
  }

  const handleScroll = (e: React.UIEvent<HTMLDivElement, globalThis.UIEvent>) => {
    let scrollTop = (e.target as Element).scrollTop + 40
    if (isRealScroll) {
      for (let i = 0; i < topArr.length - 1; i++) {
        if (topArr[i] <= scrollTop && scrollTop < topArr[i + 1]) {
          props.onSetState('currentId', i)
        }
      }
    }
  }

  useEffect(() => {
    topArr = Array.from(document.getElementsByClassName('js-category')).map((item:any) => item.offsetTop)
    topArr.push(Infinity)
  }, [props.list])

  let listDom = list.map(category => (
    <div key={category.id} id={category.id + ''} className="js-category">
      <div className="m-category-title">{category.title}</div>
      {
        category.list.map((book: IBook) => (
          <div key={book.id} className="m-list-item" onClick={() => handleDetail(book.id)}>
            <div className="m-img-wrap">
              <img src={book.avatar} alt={book.title} className="m-img"></img>
            </div>
            <div className="m-list-info">
              {book.title}
              <Stars count={book.stars}></Stars>
              <button className="m-btn" onClick={ (e) => handleShowDialog(e, book) }>添加</button>
            </div>
          </div>
        ))
      }
    </div>
  ))

  return (
    <div className="m-list" onScroll={(e) => handleScroll(e) }>
      {listDom}
      <Dialog title="添加" visible={visible} onOk={ () => handleAddToMyBooks() } onCancel={() => handleCancel()}>
        <div className="m-add-wrap">
            <div className="m-add-info">
              <button className="m-btn" onClick={() => handleSub()}>-</button>
              <input value={book.count} placeholder="数量" className="m-input" onChange={(e) => handleInput(e)} ></input>
              <button className="m-btn" onClick={() => handleAdd()} >+</button>
            </div>
          </div>
      </Dialog>
    </div>
  )
}

const mapStateToProps = (state: IStore) => {
  return {
    list: state.book.list,
    currentId: state.book.currentId,
    isRealScroll: state.book.isRealScroll
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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(List))

