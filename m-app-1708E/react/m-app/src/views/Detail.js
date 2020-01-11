import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import Api from '../api'
import CommonHeader from '../components/CommonHeader'

const Detail = (props) => {
  let [ detail, setDetail ] = useState({count: 1})
  let [ id, setId ] = useState(props.match.params.id)

  const handleUpdateId = () => {
    setId(id === '7404' ? '1009' : '7404')
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

  const handleCount = (e) => {
    detail.count = e.target.value.replace(/[^\d]/g, '') - 0
    setDetail({...detail})
  }

  const handleAddToMyBook = () => {
    props.onSetState(['loading'], true)
    Api.add({ item: detail }).then(res => {
      if (res.code === 200) {
        props.history.push('/index/my_book')
        //props.onSetState(['loading'], false)
      }
    })
  }

  useEffect(() => {
    props.onSetState(['loading'], true)
    Api.getDetail(`/${id}`).then(res => {
      if (res.code === 200) {
        let data = res.data
        data.count = 1
        setDetail(data)
        props.onSetState(['loading'], false)
      }
    })
  }, [id])

  return (
    <div className="m-wrap">
      <CommonHeader title={detail.title}></CommonHeader>
      <div className="m-detail">
        <img src={detail.avatar} alt={detail.title} width='225' height='300' className="m-detail-img"></img>
        <div>
          <button className="m-btn" onClick={handleSub}>-</button>
          <input className="m-count" value={detail.count} placeholder="数量" onChange={handleCount}/>
          <button className="m-btn" onClick={handleAdd}>+</button>
          <button className="m-btn" onClick={handleAddToMyBook}>添加</button>
        </div>        
        <div>
          <button onClick={handleUpdateId}>测试</button>
        </div>
        <div className="m-summary">
          <span className="m-summary-label">本书概述：</span>
          {detail.summary}
        </div>
      </div>
    </div>
  )
}

//从仓库里取值，相当于使用vuex时，组件里使用computed取仓库里的值
const mapStateToProps = (state) => {
  return {
    title: state.getIn(['title']),
    myBook: state.getIn(['myBook']).toJS()
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    //同步，相当于vuex里提交mutation
    onSetState(key, value) {
      dispatch({ type: 'SET_STATE', key, value })
    },
    //异步，相当于vuex里提交action
    onDispatch(action) {
      dispatch(action)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Detail)