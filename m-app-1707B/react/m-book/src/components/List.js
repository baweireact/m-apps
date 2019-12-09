import React, { Component } from 'react'
import { connect } from 'react-redux'

let categoryOffsetTopArr = []
class List extends Component {
  handleScroll(e) {
    let scrollTop = e.target.scrollTop + 50
    for (let i = 0; i < categoryOffsetTopArr.length; i++) {
      if (categoryOffsetTopArr[i] <= scrollTop && scrollTop < categoryOffsetTopArr[i + 1]) {
        this.props.onSetState('currentId', i)
        break
      }
    }
  }
  componentDidUpdate() {
    let categoryList = document.getElementsByClassName('js-category')
    categoryOffsetTopArr = Array.from(categoryList).map(item => item.offsetTop)
    categoryOffsetTopArr.push(Infinity)
  }
  render() {
    let { listAll } = this.props
    let listAllDom = listAll.map(category => (
      <div key={category.id} id={category.id} className="js-category">
        <div className="m-category">{category.title}</div>
        {
          category.list.map(item => (
            <div key={item.id} className="m-list-item">
              <img src={item.avatar} className="m-img" alt={item.title}></img>
              <div className="m-info">
                {item.title}
              </div>
            </div>
          ))
        }
      </div>
    ))
    return (
      <div className="m-list" onScroll={this.handleScroll.bind(this)}>
        {listAllDom}
      </div>
    )
  }
}

//相当于vue里的computed计算属性获取store里的数据
const mapStateToProps = (state) => {
  return {
    listAll: state.listAll,
    currentId: state.currentId
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

export default connect(mapStateToProps, mapDispatchToProps)(List)