import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import actionCreator from '../store/actionCreator'
import Api from '../api'

const Detail = (props) => {
  let [detail, setDetail] = useState({count: 1})

  const handleBack = () => {
    props.history.go(-1)
  }

  const handleSub = () => {
    if (detail.count > 1) {
      detail.count--
      setDetail({...detail})
    }
  }

  const handleAdd = () => {
    detail.count++
    setDetail({...detail})
  }

  const handleAddToMyBook = () => {
    let { myBook } = props
    let index = myBook.findIndex(book => book.id === detail.id)
    if (index >= 0) {
      myBook[index].count += detail.count
      myBook[index].checked = true
    } else {
      detail.checked = true
      myBook.push(detail)
    }
    props.onSetState(['myBook'], myBook)
    props.onDispatch(actionCreator.updateMyBook(myBook))
    props.history.push('/index/my_book')
  }

  const handleInput = (e) => {
    detail.count = e.target.value.replace(/[^0-9]/g, '') * 1
    setDetail(detail)
  }

  useEffect(() => {
    let { id } = props.match.params
    Api.getDetail(`?id=${id}`).then(res => {
      if (res.code === 200) {
        let myDetail = res.data
        myDetail.count = 1
        setDetail(myDetail)
      }
    })
  }, [])
  return (
    <div className="m-main">
      <div>
        <button onClick={handleBack}>返回</button>
      </div>
      <img src={detail.avatar}></img>
      <div>
        <button onClick={handleSub} className="m-dialog-btn">-</button>
        <input placeholder="请输入" value={detail.count} className="m-add-count" onChange={handleInput} type="text"></input>
        <button onClick={handleAdd} className="m-dialog-btn">+</button>
        <button onClick={handleAddToMyBook}>添加</button>
      </div>
      <div>{detail.summary}</div>
    </div>
  )
}

//相当于vue里的computed计算属性获取store里的数据
const mapStateToProps = (state) => {
  state = state.toJS()
  return {
    listAll: state.listAll,
    currentId: state.currentId,
    myBook: state.myBook
  }
}

//onSetState相当于vuex里的commit提交mutation， onDispatcg相当于vuex里的dispatch提交action
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

export default connect(mapStateToProps, mapDispatchToProps)(Detail)
