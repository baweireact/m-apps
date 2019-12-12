import React, { Component } from 'react'
import { connect } from 'react-redux'

class MyBook extends Component {
  render() {
    let { myBook } = this.props
    let myBookDom = myBook.map(item => (
      <div key={item.id}>{item.title}</div>
    ))
    return (
      <div className="m-main">
        {myBookDom}
      </div>
    )
  }
}

//相当于vuex里的computed计算属性
const mapStateToProps = (state) => {
  //state = state.toJS()  //把immutable对象转换为js对象
  return {
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

export default connect(mapStateToProps, mapDispatchToProps)(MyBook)