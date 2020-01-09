import React, { Component } from 'react'
import { connect } from 'react-redux'
import LazyLoad from 'react-lazy-load'
import { withRouter } from 'react-router-dom'
import Stars from './Stars'

let offsetTopArr = []
class List extends Component {
  handleScroll(e) {
    let { isRealScroll } = this.props
    let { scrollTop } = e.target
    //console.log(scrollTop)
    scrollTop = scrollTop + 50
    if (isRealScroll) {
      for (let i = 0; i < offsetTopArr.length; i++) {
        if (offsetTopArr[i] < scrollTop && scrollTop < offsetTopArr[i + 1]) {
          console.log(i)
          this.props.onSetState(['currentId'], i)
        }
      }
    }
  }
  
  handleDetail(id) {
    this.props.history.push('/detail/' + id)
  }

  componentDidUpdate() {
    offsetTopArr = Array.from(document.getElementsByClassName('js-category-item')).map(item => item.offsetTop)
    offsetTopArr.push(Infinity)
    console.log(offsetTopArr)
  }

  render() {
    let { listAll } = this.props

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
                <button onClick={() => this.handleDetail(book.id)}>详情</button>
              </div>
            </div>
          ))
        }
      </div>
    ))

    return (
      <div className="m-list" onScroll={(e) => { this. handleScroll(e)}}>
        {listDom}
      </div>
    )
  }
}

//从仓库里取值，相当于使用vuex时，组件里使用computed取仓库里的值
const mapStateToProps = (state) => {
  return {
    listAll: state.getIn(['listAll']).toJS(),
    currentId:state.getIn(['currentId']),
    isRealScroll: state.getIn(['isRealScroll'])
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

