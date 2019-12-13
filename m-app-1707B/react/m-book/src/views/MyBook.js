import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fromJS, is } from 'immutable'
import { message } from 'antd'
import actionCreator from '../store/actionCreator'
import Dialog from '../components/Dialog'


let myBookHistory = []
class MyBook extends Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: false
    }
  }
  handleCheck(index, e) {
    let { myBook } = this.props
    myBook[index].checked = e.target.checked
    this.props.onSetState(['myBook'], myBook)
  }
  handleSelectAll(e) {
    let { myBook } = this.props
    myBook.forEach(item => {
      item.checked = e.target.checked
    })
    this.props.onSetState(['myBook'], myBook)
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
    myBook[index].count = e.target.value.replace(/[^0-9]/g, '') * 1
    this.props.onSetState(['myBook'], myBook)
  }
  handleDelete(index) {
    let { myBook } = this.props
    myBook.splice(index, 1)
    this.props.onSetState(['myBook'], myBook)
  }
  handleShowDialog() {
    let { myBook } = this.props
    if (myBook.filter(item => item.checked).length > 0) {
      this.setState({
        visible: true
      })
    } else {
      message.info('请选择要删除的商品~')
    }
  }
  handleHideDialog() {
    this.setState({
      visible: false
    })
  }
  handleDeleteSelected() {
    let { myBook } = this.props
    this.props.onSetState(['myBook'], myBook.filter(item => !item.checked))
    this.handleHideDialog()
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
  render() {
    let { myBook } = this.props
    let { visible } = this.state
    let totalPrice = 0, totalCount = 0
    myBook.filter(item => item.checked).forEach(item => {
      totalPrice += item.count * item.price
      totalCount += item.count
    })
    let count = myBook.filter(item => item.checked).length
    let selectedAll = count == myBook.length && count > 0
    let myBookDom = myBook.map((item, index) => (
      <div key={item.id} className="m-my-book-item">
        <div className="m-my-book-info">
          <label>
            <input type="checkbox" checked={item.checked} onChange={this.handleCheck.bind(this, index)}></input>
            {item.title}
          </label>
          ￥{item.price}
        </div>
        <div className="m-my-book-action">
          <button onClick={this.handleSub.bind(this, index)} className="m-btn">-</button>
          <input placeholder="请输入" value={item.count} className="m-add-count" onChange={this.handleCount.bind(this, index)} type="text"></input>
          <button onClick={this.handleAdd.bind(this, index)} className="m-btn">+</button>
          <button onClick={this.handleDelete.bind(this, index)}>删除</button>
        </div>
      </div>
    ))
    return (
      <div className="m-main m-my-book">
        {myBookDom}
        {
          myBook.length > 0 &&
          <div>
            <div>
              <label>
                <input type="checkbox" checked={selectedAll} onChange={this.handleSelectAll.bind(this)}></input>
                全选
            </label>
              <button onClick={this.handleShowDialog.bind(this)}>删除</button>
            </div>
            <div>
              总价：￥{totalPrice}，总数：{totalCount}
            </div>
          </div>
        }
        <Dialog
          title="删除"
          visible={visible}
          onCancel={this.handleHideDialog.bind(this)}
          onOk={this.handleDeleteSelected.bind(this)}
        >
          <div className="m-delete-msg">你确定要删除选中的商品吗？</div>
        </Dialog>
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
