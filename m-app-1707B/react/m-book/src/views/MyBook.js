import React, { Component } from 'react'
import { connect } from 'react-redux'

class MyBook extends Component {
  handleCheck() {
    
  }
  render() {
    let { myBook } = this.props
    let myBookDom = myBook.map((item, index) => (
      <div key={item.id}>
        <input type="checkbox" checked={item.checked} id={item.id} onChange={this.handleCheck.bind(this, index)}></input>
        <label htmlFor={item.id}>{item.title}</label>
      </div>
    ))
    return (
      <div className="m-main">
        {myBookDom}
      </div>
    )
  }
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

export default connect(mapStateToProps, mapDispatchToProps)(MyBook)
