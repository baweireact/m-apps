import React, { useState } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import LazyLoad from 'react-lazy-load'
import actionCreator from '../store/task/actionCreator'
import Stars from './Stars'
import Dialog from './Dialog'

const List = (props) => {
  //hook,  https://react.docschina.org/docs/hooks-intro.html
  const [ visible, setVisible ] = useState(false)
  const [ book, setBook ] = useState({count:1})
  const [ count, setCount ] = useState(0)

  //控制对话框显示
  const handleShowDialog = (book) => {
    setVisible(true)
    book.count = 1
    book.checked = true
    setBook(book)
  }

  //控制对话框隐藏
  const handleCancel = () => {
    setVisible(false)
  }

  //添加
  const handleAddToMyBooks = () => {
    props.onDispatch(actionCreator.myBooks({book}, 'post'))
    handleCancel()
  }

  //注意事项：正则表达式，引用类型
  const handleInput = (e) => {
    let count = e.target.value.replace(/[^0-9]/g, '') - 0
    if (count === 0) {
      count = 1
    }
    book.count = count
    setBook(book)
    setCount(count + 1)
  }

  const handleAdd = () => {
    book.count++
    setBook(book)
    setCount(count + 1)
  }

  const handleDetail = (id) => {
    props.history.push('/detail/' + id)
  }

  let { list } = props

  let listDom = list.map(category => (
    <div key={category.id} id={category.id}>
      <div className="m-category-title">{category.title}</div>
      {
        category.list.map(book => (
          <div key={book.id} className="m-list-item">
            <LazyLoad className="m-img-wrap">
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
    <div className="m-list">
      {listDom}
      <Dialog visible={visible} title="添加" onCancel={() => handleCancel()} onOk={() => handleAddToMyBooks()}>
        <div className="m-add-info-warp">
          <div className="m-add-info">
            <button className="m-btn">减</button>
            <input placeholder="数量" className="m-input" value={book.count} onChange={(e) => handleInput(e)} ></input>
            <button className="m-btn" onClick={() => handleAdd()}>加</button>
          </div>
        </div>
      </Dialog>
    </div>
  )
}

//相当于vuex里计算属性，取值
const mapStateToProps = (state) => {
  return {
    list: state.getIn(['task', 'list']).toJS(),
    currentId: state.getIn(['task', 'currentId']),
    myBooks: state.getIn(['task', 'myBooks']).toJS()
  }
}

//相当于提交mutation，改值
const mapDispatchToProps = (dispatch) => {
  return {
    onSetState(key, value) {
      dispatch({type: 'SET_STATE', key, value})
    },
    //异步
    onDispatch(action) {
      dispatch(action)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(List))
