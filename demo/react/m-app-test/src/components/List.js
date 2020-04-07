import React from 'react'
import { connect } from 'react-redux'
import Stars from './Stars'

const List = (props) => {
  let { list } = props

  let listDom = list.map(category => (
    <div key={category.id} id={category.id}>
      <div className="m-category-title">{category.title}</div>
      {
        category.list.map(book => (
          <div key={book.id} className="m-list-item">
            <div className="m-img-wrap">
              <img src={book.avatar} className="m-list-img"></img>
            </div>
            <div className="m-list-info">
              {book.title}
              <Stars count={book.stars}></Stars>
            </div>
          </div>
        ))
      }
    </div>
  ))

  return (
    <div className="m-list">
      {listDom}
    </div>
  )
}

//相当于vuex里计算属性，取值
const mapStateToProps = (state) => {
  return {
    list: state.getIn(['list']).toJS(),
    currentId: state.getIn(['currentId'])
  }
}

//相当于提交mutation，改值
const mapDispatchToProps = (dispatch) => {
  return {
    onSetState(key, value) {
      dispatch({type: 'SET_STATE', key, value})
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(List)
