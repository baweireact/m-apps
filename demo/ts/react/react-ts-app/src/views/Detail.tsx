import React, { useState, useEffect, ChangeEvent, Dispatch } from 'react'
import { RouteComponentProps } from 'react-router-dom'
import { connect } from 'react-redux'
import DetailHeader from '../components/DetailHeader'
import Api from '../api'
import actionCreator from '../store/book/actionCreator'

interface IProps extends RouteComponentProps {
  onDispatch(action: Function):void
}

const Detail = (props: IProps ) => {
  let [ book, setBook ] = useState<any>({ count: 1}) 

  const handleSub = () => {
    if (book.count > 1) {
      book.count--
      setBook({...book})
    }
  }

  const handleAdd = () => {
    book.count++
    setBook({...book})
  }

  const handleAddToMyBook = () => {
    props.onDispatch(actionCreator.myBooks({ book }, 'post', () => {
      props.history.push('/index/my_books')
    }))
  }

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    let count = parseInt(e.target.value.replace(/[^\d]/g, ''))
    if (count === 0) {
      count = 1
    }
    book.count = count
    setBook({...book})
  }


  useEffect(() => {
    //@ts-ignore
    let { id } = props.match.params
    Api.getDetail(id).then(res =>  {
      if (res.code === 200) {
        let book = res.data
        book.count = 1
        book.checked = true
        setBook(book)
      }
    })
  }, [props])
  
  return (
    <div>
      <DetailHeader title={book.title}></DetailHeader>
      <div className="m-detail-img-wrap">
        <img src={book.avatar} alt={book.title}></img>
      </div>
      <div>
        <div className="m-add-info">
          <button className="m-btn" onClick={() => handleSub()}>-</button>
          <input value={book.count} placeholder="数量" className="m-input" onChange={(e) => handleInput(e)} ></input>
          <button className="m-btn" onClick={() => handleAdd()} >+</button>
          <button className="m-btn" onClick={() => handleAddToMyBook()}>添加</button>
        </div>
      </div>
    </div>
  )
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

export default connect(null, mapDispatchToProps)(Detail)
