import React, { Component } from 'react'
import { connect } from 'react-redux'

let offsetTopArr = []
class List extends Component {
  handleScroll(e) {
    let { isRealScroll } = this.props
    let { scrollTop, clientHeight, scrollHeight } = e.target
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

  componentDidUpdate() {
    offsetTopArr = Array.from(document.getElementsByClassName('js-category-item')).map(item => item.offsetTop)
    offsetTopArr.push(Infinity)
  }

  render() {
    let { allList } = this.props

    let listDom = allList.map(category => (
      <div className="m-category-item js-category-item" key={category.id} id={category.id}>
        <div className="m-category-title">{category.title}</div>
        {
          category.list.map(book => (
            <div className="m-book-item" key={book.id}>
              <div className="m-book-img-wrap">
                <img src={book.avatar} className="m-book-img"></img>
              </div>
              <div className="m-book-info">{book.title}</div>
            </div>
          ))
        }
      </div>
    ))

    return (
      <div className="m-list" onScroll={this.handleScroll.bind(this)}>
        {listDom}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    allList: state.getIn(['allList']).toJS(),
    currentId: state.getIn(['currentId']),
    isRealScroll: state.getIn(['isRealScroll'])
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

export default connect(mapStateToProps, mapDispatchToProps)(List)