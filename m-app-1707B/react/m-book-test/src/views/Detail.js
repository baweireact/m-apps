import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import Api from '../api'

const Detail = (props) => {
  let [detail, setDetail] = useState({count: 1})
  let [item, setItem] = useState(1)

  const handleAdd = () => {
    detail.count++
    setDetail({...detail})
  }

  const handleSub = () => {
    if (detail.count > 1) {
      detail.count--
      setDetail({...detail})
    }
  }

  const handleCount = (e) => {
    detail.count = e.target.value.replace(/[^0-9]/g, '') * 1
    setDetail({...detail})
  }

  const handleAddToMyBook = () => {
    let { myBook } = props
    let index = myBook.findIndex(book => book.id === detail.id)
    if (index >= 0) {
      myBook[index].count += item.count
    } else {
      myBook.push(detail)
    }
    
    props.onSetState(['myBook'], myBook)
    Api.update({ myBookNew: myBook }).then()
  }

  //类似于compenentDidMount
  useEffect(() => {
    let { id } = props.match.params
    Api.getDetail(`?id=${id}`).then(res => {
      if (res.code === 200) {
        let detailTemp = res.data
        detailTemp.count = 1
        setDetail(detailTemp)
      }
    })
  }, [])

  return (
    <div>
      <div>
        <button onClick={() => { props.history.go(-1) }}>返回</button>
      </div>
      <div>
      {item}
      </div>
      <img src={detail.avatar}></img>
      <div className="m-add-my-book">
        <button className="m-btn" onClick={handleSub}>-</button>
        <input value={detail.count} onChange={handleCount} placeholder="数量" className="m-input"></input>
        <button className="m-btn" onClick={handleAdd}>+</button>
        <button onClick={handleAddToMyBook}>添加</button>
      </div>
      <div>
        {detail.title}
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  //state = state.toJS()  //把immutable对象转换为js对象
  return {
    listAll: state.getIn(['listAll']).toJS(),
    currentId: state.getIn(['currentId']),
    myBook: state.getIn(['myBook']).toJS()
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    //相当于vuex里提交mutation
    onSetState(key, value) {
      dispatch({ type: 'SET_STATE', key, value })
    },
    //相当于vuex里的提交action
    onDispatch(action) {
      dispatch(action)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Detail)
