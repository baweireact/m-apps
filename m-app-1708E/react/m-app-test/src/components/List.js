import React, { Component } from 'react'
import { connect } from 'react-redux'
import LazyLoad from 'react-lazy-load'
import { withRouter } from 'react-router-dom'
import Stars from './Stars'
import Dialog from '../components/Dialog'
import Api from '../api'

let offsetTopArr = []
class List extends Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: false,
      book: { count: 1 }  //临时的
    }
  }
  handleScroll(e) {
    let { isRealScroll } = this.props
    let { scrollTop } = e.target
    //console.log(scrollTop)
    scrollTop = scrollTop + 50
    if (isRealScroll) {
      for (let i = 0; i < offsetTopArr.length; i++) {
        if (offsetTopArr[i] < scrollTop && scrollTop < offsetTopArr[i + 1]) {
          this.props.onSetState(['currentId'], i)
        }
      }
    }
  }
  
  handleDetail(id) {
    this.props.history.push('/detail/' + id)
  }

  handleShowDialog(book) {
    book.count = 1
    this.setState({
      visible: true,
      book
    })
  }

  handleHideDialog() {
    this.setState({
      visible: false
    })
  }

  handleCount(e) {
    let { book } = this.state
    book.count = e.target.value.replace(/[^\d]/g, '') - 0
    this.setState({
      book
    })
  }

  handleAdd() {
    let { book } = this.state
    book.count++
    this.setState({
      book
    })
  }

  handleSub() {
    let { book } = this.state
    if (book.count > 1) {
      book.count--
      this.setState({
        book
      })
    }
  }

  handleAddToMyBook() {
    let { book } = this.state
    let { myBook } = this.props

    let index = myBook.findIndex(item => item.id === book.id)
    if (index >= 0) {
      myBook[index].count += book.count
    } else {
      myBook.push(book)
    }

    this.props.onSetState(['myBook'], myBook)

    Api.add({ item: book })

    this.handleHideDialog()
  }

  componentDidUpdate() {
    offsetTopArr = Array.from(document.getElementsByClassName('js-category-item')).map(item => item.offsetTop)
    offsetTopArr.push(Infinity)
  }

  render() {
    let { listAll } = this.props
    let { visible, book } = this.state

    let listDom = listAll.map(category => (
      <div key={category.id} className="m-category-item js-category-item" id={category.id}>
        <div className="m-category-title">{category.title}</div>
        {
          category.list.map(book => (
            <div key={book.id} className="m-list-item">
              <LazyLoad className="m-list-img-wrap">
                <img src={book.avatar} className="m-list-img" alt={book.title}></img>
              </LazyLoad>
              <div className="m-list-info">
                {book.title}
                <Stars count={book.stars}></Stars>
                <button onClick={() => this.handleShowDialog(book)} className="m-btn" >添加</button>
                <button onClick={() => this.handleDetail(book.id)} className="m-btn">详情</button>
              </div>
            </div>
          ))
        }
      </div>
    ))

    return (
      <div className="m-list" onScroll={(e) => { this. handleScroll(e)}}>
        {listDom}
        <Dialog 
          visible={visible} 
          title="添加到书包" 
          onOk={() => this.handleAddToMyBook()}
          onCancel={() => this.handleHideDialog()}>
          <div className="m-action">
            <button className="m-btn" onClick={() => this.handleSub()}>-</button>
            <input className="m-count" value={book.count} onChange={(e) => this.handleCount(e)}></input>
            <button className="m-btn" onClick={() => this.handleAdd()}>+</button>
          </div>
        </Dialog>
      </div>
    )
  }
}

//从仓库里取值，相当于使用vuex时，组件里使用computed取仓库里的值
const mapStateToProps = (state) => {
  return {
    listAll: state.getIn(['listAll']).toJS(),
    currentId:state.getIn(['currentId']),
    isRealScroll: state.getIn(['isRealScroll']),
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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(List))

