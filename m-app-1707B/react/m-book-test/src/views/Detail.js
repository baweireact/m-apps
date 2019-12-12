import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import Api from '../api'

const Detail = (props) => {
  let [ detail, setDetail ] = useState({})

  useEffect(() => {
    let { id } = props.match.params
    Api.getDetail(`?id=${id}`).then(res => {
      if (res.code === 200) {
        setDetail(res.data)
      }
    })
  }, [])

  return (
    <div>
      <img src={detail.avatar}></img>
      {detail.title}
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
