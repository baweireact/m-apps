import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import LazyLoad from 'react-lazy-load'
import Stars from '../components/Stars'
import Dialog from '../components/Dialog'
import Api from '../api'

let offsetTopArr = []
class List extends Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: false,
      book: {count: 1}
    }
  }
  handleScroll(e) {
    let { isRealScroll } = this.props
    let { scrollTop } = e.target
    //console.log(scrollTop, clientHeight, scrollHeight)
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

  handleAddToMyBook() {
    let { myBook } = this.props
    let { book } = this.state
    let index = myBook.findIndex(item => item.id === book.id)
    if (index >= 0) {
      myBook[index].count += book.count
    } else {
      myBook.push(book)
    }

    this.props.onSetState(['myBook'], myBook)

    Api.update({ myBookNew: myBook })

    this.handleHideDialog()
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

  componentDidUpdate() {
    offsetTopArr = Array.from(document.getElementsByClassName('js-category-item')).map(item => item.offsetTop)
    offsetTopArr.push(Infinity)
  }

  render() {
    let { allList } = this.props
    let { visible, book } = this.state

    let listDom = allList.map(category => (
      <div className="m-category-item js-category-item" key={category.id} id={category.id}>
        <div className="m-category-title">{category.title}</div>
        {
          category.list.map(book => (
            <div className="m-book-item" key={book.id}>
              <LazyLoad className="m-book-img-wrap">
                <img src={book.avatar} className="m-book-img" alt={book.title}></img>
              </LazyLoad>
              <div className="m-book-info">
                {book.title}
                <Stars count={book.stars}></Stars>
                <button onClick={ () => this.handleShowDialog(book) } className="m-btn">添加</button>
                <button onClick={ () => this.handleDetail(book.id) } className="m-btn">详情</button>
              </div>
            </div>
          ))
        }
      </div>
    ))

    return (
      <div className="m-list" onScroll={this.handleScroll.bind(this)}>
        {listDom}
        <Dialog 
          visible={visible} 
          title="添加" 
          onOk={() => this.handleAddToMyBook()}
          onCancel={() => this.handleHideDialog()}>
          <div className="m-action-wrap">
            <div className="m-action">
              <button className="m-btn" onClick={() => this.handleSub()}>-</button>
              <input className="m-count" value={book.count} placeholder="数量" onChange={(e) => this.handleCount(e)}/>
              <button className="m-btn" onClick={() => this.handleAdd()}>+</button>
            </div>
          </div>
        </Dialog>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    allList: state.getIn(['allList']).toJS(),
    currentId: state.getIn(['currentId']),
    isRealScroll: state.getIn(['isRealScroll']),
    myBook: state.getIn(['myBook']).toJS()
  }
}

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