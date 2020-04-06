import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import LazyLoad from 'react-lazy-load'
import { withRouter } from 'react-router-dom'
import Stars from './Stars'
import Dialog from './Dialog'
import actionCreator from '../store/actionCreator'

let topArr = []
const List = (props) => {
  let { list, isRealScroll } = props
  let [ visible, setVisible ] = useState(false)
  let [ book, setBook ] = useState({count: 1})

  const handleScroll = (e) => {
    let scrollTop = e.target.scrollTop + 40
    if (isRealScroll) {
      for (let i = 0; i < topArr.length - 1; i++) {
        if (topArr[i] <= scrollTop && scrollTop < topArr[i + 1]) {
          props.onSetState(['currentId'], i)
        }
      }
    }
  }

  const handleShowDialog = (book) => {
    book.count = 1
    setBook(book)
    setVisible(true)
  }

  const handleInput = (e) => {
    let count = e.target.value.replace(/[^\d]/g, '') - 0
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

  const handleCancel = () => {
    setVisible(false)
  }

  const handleAddToMyBooks = () => {
    book.checked = true
    props.onDispatch(actionCreator.myBooks({book}, 'post', handleCancel))
  }

  const handleDetail = (id) => {
    props.history.push(`/detail/${id}`)
  } 

  useEffect(() => {
    topArr = Array.from(document.getElementsByClassName('js-category')).map(item => item.offsetTop)
    topArr.push(Infinity)
  }, [props])


  let listDom = list.map(category => (
    <div key={category.id} id={category.id} className="js-category">
      <div className="m-list-category-title">{category.title}</div>
      {
        category.list.map(book => (
          <div key={book.id} className="m-list-item">
            <LazyLoad className="m-list-img-wrap">
              <img src={book.avatar} className="m-list-img" onClick={() => handleDetail(book.id)}></img>
            </LazyLoad>
            <div className="m-list-info">
              {book.title}
              <Stars count={book.stars}></Stars>
              <button onClick={() => handleShowDialog(book)}>添加</button>
            </div>
          </div>
        ))
      }
    </div>
  ))
  return (
    <div className="m-list" onScroll={(e) => handleScroll(e)}>
      {listDom}
      <Dialog visible={visible} title="添加" onCancel={() => handleCancel()} onOk={() => handleAddToMyBooks()} >
        <div className="m-add-info-wrap">
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

const mapStateToProps = (state) => {
  return {
    list: state.getIn(['list']).toJS(),
    isRealScroll: state.getIn(['isRealScroll'])
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSetState(key, value) {
      dispatch({ type: 'SET_STATE', key, value })
    },
    onDispatch(action) {
      dispatch(action)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(List))
