import React, { useEffect } from 'react'
import { connect } from 'react-redux'

const MyBooks = (props) => {

  useEffect(() => {
    //props.onSetState(['title'], '我的书包')
  }, [])

  return (
    <div className="m-main">
      2
    </div>
  )
}


//相当于vuex里计算属性，取值
const mapStateToProps = (state) => {
  return {
    title: state.getIn(['title'])
  }
}

//相当于提交mutation，改值
const mapDispatchToProps = (dispatch) => {
  return {
    onSetState(key, value) {
      dispatch({type: 'SET_STATE', key, value})
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyBooks)
