import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import LazyLoad from 'react-lazy-load'
import Stars from './Stars'
import Dialog from './Dialog'
import actionCreator from '../store/actionCreator'

let categoryOffsetTopArr = []
class List extends Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: false,
      item: {count: 1}
    }
  }
  handleShowDialog(item) {
    item.count = 1
    this.setState({
      visible: true,
      item
    })
  }
  handleHideDialog() {
    this.setState({
      visible: false
    })
  }
  handleAddToMyBook() {
    let { myBook } = this.props
    let { item } = this.state
    let index = myBook.findIndex(book => book.id === item.id)
    if (index >= 0) {
      myBook[index].count += item.count
      myBook[index].checked = true
    } else {
      item.checked = true
      myBook.push(item)
    }
    this.props.onSetState(['myBook'], myBook)
    this.handleHideDialog()
    this.props.onDispatch(actionCreator.updateMyBook(myBook))
  }
  handleAdd() {
    let { item } = this.state
    item.count++
    this.setState({
      item
    })
  }
  handleSub() {
    let { item } = this.state
    if (item.count > 1) {
      item.count--
      this.setState({
        item
      })
    }
  }
  handleCount(e) {
    let { item } = this.state
    item.count = e.target.value.replace(/[^0-9]/g, '') * 1 
    this.setState({
      item
    })
  }
  handleScroll(e) {
    let { isRealScroll } = this.props
    let scrollTop = e.target.scrollTop + 50
    for (let i = 0; i < categoryOffsetTopArr.length; i++) {
      if (categoryOffsetTopArr[i] <= scrollTop && scrollTop < categoryOffsetTopArr[i + 1] && isRealScroll) {
        this.props.onSetState(['currentId'], i)
        break
      }
    }
  }
  handleDetail(id) {
    this.props.history.push('/detail/' + id)
  }
  componentDidUpdate() {
    let categoryList = document.getElementsByClassName('js-category')
    categoryOffsetTopArr = Array.from(categoryList).map(item => item.offsetTop)
    categoryOffsetTopArr.push(Infinity)
  }
  render() {
    let { listAll } = this.props
    let { visible, item } = this.state
    let listAllDom = listAll.map(category => (
      <div key={category.id} id={category.id} className="js-category">
        <div className="m-category">{category.title}</div>
        {
          category.list.map(item => (
            <div key={item.id} className="m-list-item">
              <LazyLoad className="m-img-wrap">
                <img src={item.avatar} className="m-img" alt={item.title}></img>
              </LazyLoad>
              <div className="m-info">
                {item.title}
                <Stars count={item.stars}></Stars>
                <button onClick={this.handleShowDialog.bind(this, item)} className="m-btn">添加</button>
                <button onClick={this.handleDetail.bind(this, item.id)} className="m-btn">详情</button>
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
          visible={visible} 
          title="添加"
          onCancel={this.handleHideDialog.bind(this)}
          onOk={this.handleAddToMyBook.bind(this)}>
          <div className="m-add-content">
            <button onClick={this.handleSub.bind(this)} className="m-btn">-</button>
            <input placeholder="请输入" value={item.count} className="m-add-count" onChange={this.handleCount.bind(this)} type="text"></input>
            <button onClick={this.handleAdd.bind(this)} className="m-btn">+</button>
          </div>
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
    myBook: state.myBook,
    isRealScroll: state.isRealScroll
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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(List))