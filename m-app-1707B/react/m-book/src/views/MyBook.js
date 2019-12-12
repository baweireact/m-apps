import React, { Component } from 'react'
import { connect } from 'react-redux'
import actionCreator from '../store/actionCreator'
import { fromJS, is } from 'immutable'

let myBookHistory = []
class MyBook extends Component {
  handleCheck(index, e) {
    let { myBook } = this.props
    myBook[index].checked = e.target.checked
    this.props.onSetState(['myBook'], myBook)
  }
  handleSelectAll(e) {
    
  }
  handleSub(index) {
    let { myBook } = this.props
    if (myBook[index].count > 1) {
      myBook[index].count--
      this.props.onSetState(['myBook'], myBook)
    }
  }
  handleAdd(index) {
    let { myBook } = this.props
    myBook[index].count++
    this.props.onSetState(['myBook'], myBook)
  }
  handleCount(index, e) {
    let { myBook } = this.props
    myBook[index].count = e.target.value.replace(/[^0-9]/g, '')
    this.props.onSetState(['myBook'], myBook)
  }
  componentDidUpdate() {
    let { myBook } = this.props
    if (is(fromJS(myBookHistory), fromJS(myBook))) {
      console.log(2)
    } else {
      console.log(1)
      this.props.onDispatch(actionCreator.updateMyBook(myBook))
      myBookHistory = MyBook
    }
  }
  componentDidMount() {
    this.props.onDispatch(actionCreator.getMyBook())
  }
  render() {
    let { myBook } = this.props
    let totalPrice = 0, totalCount = 0
    myBook.filter(item => item.checked).forEach(item => {
      totalPrice += item.count * item.price
      totalCount += item.count
    })
    let count = myBook.filter(item => item.checked).length
    let selectedAll = count == myBook.length && count > 0
    let myBookDom = myBook.map((item, index) => (
      <div key={item.id}>
        <input type="checkbox" checked={item.checked} id={item.id} onChange={this.handleCheck.bind(this, index)}></input>
        <label htmlFor={item.id}>{item.title}</label>
        <button onClick={this.handleSub.bind(this, index)} className="m-btn">-</button>
        <input placeholder="请输入" value={item.count} className="m-add-count" onChange={this.handleCount.bind(this, index)} type="text"></input>
        <button onClick={this.handleAdd.bind(this, index)} className="m-btn">+</button>
      </div>
    ))
    return (
      <div className="m-main">
        {myBookDom}
        <div>
          <input type="checkbox" checked={ selectedAll } onChange={this.handleSelectAll.bind(this)}></input> 全选
        </div>
        <div>
          总价：{totalPrice}，总数：{totalCount}
        </div>
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
