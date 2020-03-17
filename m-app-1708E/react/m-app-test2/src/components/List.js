import React from 'react'
import { connect } from 'react-redux'

const List = (props) => {
  let { listAll } = props
  let listDom = listAll.map(category => (
    <div key={category.id}>
      <div className="m-category-title">
        {category.title}
      </div>
      
      {
        category.list.map(book => (
          <div key={book.id} className="m-list-item">
            <div className="m-list-img-wrap">
              <img src={book.avatar} className="m-list-img"></img>
            </div>
            <div className="m-list-info">{book.title}</div>
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

//取全局store里的数据
const mapStateToProps = (state) => {
  return {
    listAll: state.getIn(['listAll']).toJS(),
    currentId: state.getIn(['currentId'])
  }
}

//改全局store里的数据
const mapDispatchToProps = (dispatch) => {
  return {
    //同步
    onSetState(key, value) {
      dispatch({ type: 'SET_STATE', key, value })
    },
    //异步
    onDispatch(action) {
      dispatch(action)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(List)