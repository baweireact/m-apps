import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import Dialog from '../components/Dialog'
import Stars from './Stars'
import Api from '../api'

let topArr = []
class List extends Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: false,
      item: {count: 1}
    }
  }
  //右侧list滚动事件，会控制侧边栏的高亮
  handleScroll(e) {
    //onsole.log(e.target.scrollTop)
    let { isRealScroll } = this.props
    let top = e.target.scrollTop + 50 + 2
    for (let i = 0; i < topArr.length; i++) {
      if (topArr[i] < top && top < topArr[i + 1] && isRealScroll) {
        this.props.onSetState(['currentId'], i)
      }
    }
  }
  //点击添加时，打开对话框（自定义），同时把对应的书（item）保存到state里
  handleShowDialog(item) {
    item.count = 1
    this.setState({
      visible: true,
      item
    })
  }
  //隐藏对话框
  handleHideDialog() {
    this.setState({
      visible: false
    })
  }
  //添加到书包
  handleAddToMyBook() {
    //
    let { myBook } = this.props
    let { item } = this.state
    let index = myBook.findIndex(book => book.id === item.id)
    if (index >= 0) {
      myBook[index].count += item.count
    } else {
      myBook.push(item)
    }
    
    this.props.onSetState(['myBook'], myBook)
    this.handleHideDialog()
    Api.update({ myBookNew: myBook }).then()
  }
  //添加的商品数量可以通过input框输入
  handleCount(e) {
    let { item } = this.state
    item.count = e.target.value.replace(/[^0-9]/g, '') * 1
    this.setState({
      item
    })
  }
  //加
  handleAdd() {
    let {item} = this.state
    item.count++
    this.setState(
      item
    )
  }
  //减
  handleSub() {
    let {item} = this.state
    if (item.count > 1) {
      item.count = item.count - 1
      this.setState({
        item
      })
    }
  }
  handleDetail(id) {
    this.props.history.push('/detail/' + id)
  }
  //每次渲染完成后会把右侧的大分类的dom距离顶部的高度保存到数组里
  componentDidUpdate() {
    topArr = Array.from(document.getElementsByClassName('js-list-item')).map(item => item.offsetTop)
    topArr.push(Infinity)
  }
  render() {
    let { listAll } = this.props
    let { visible, item } = this.state
    let listAllDom = listAll.map(item => (
      <div key={item.id} id={item.id} className="js-list-item">
        <div className="m-list-title">{item.title}</div>
        {
          item.list.map(book => (
            <div key={book.id} className="m-list-item">
              <img src={book.avatar} className="m-img"></img>
              <div className="m-info">
                {book.title}
                <Stars count={book.stars}></Stars>
                <div>
                  <button onClick={this.handleShowDialog.bind(this, book)}>添加</button>
                  <button onClick={this.handleDetail.bind(this, book.id)}>详情</button>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    ))
    return (
      <div className="m-list" onScroll={this.handleScroll.bind(this)}>
        {listAllDom}
        <Dialog 
          title="添加" 
          visible={visible} 
          onOk={this.handleAddToMyBook.bind(this)}
          onCancel={this.handleHideDialog.bind(this)}>
          <div className="m-add-my-book">
            <button className="m-btn" onClick={this.handleSub.bind(this)}>-</button>
            <input value={item.count} onChange={this.handleCount.bind(this)} placeholder="数量" className="m-input"></input>
            <button className="m-btn" onClick={this.handleAdd.bind(this)}>+</button>
          </div>
        </Dialog>
      </div>
    )
  }
}

//相当于vuex里的computed计算属性
const mapStateToProps = (state) => {
  //state = state.toJS()  //把immutable对象转换为js对象
  return {
    listAll: state.getIn(['listAll']).toJS(),
    currentId: state.getIn(['currentId']),
    myBook: state.getIn(['myBook']).toJS(),
    isRealScroll: state.getIn(['isRealScroll'])
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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(List))
