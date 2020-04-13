import React from 'react'
import { connect } from 'react-redux'
import actionCreator from '../store/task/actionCreator'

const MyBooks = (props) => {
  let { myBooks } = props

  //加
  const handleAdd = (id) => {
    //myBooks[index].count++
    //props.onSetState(['myBooks'], myBooks)
    props.onDispatch(actionCreator.myBooks({ id , operation: 'add' } ,'patch'))
  }

  //减
  const handleSub = (id) => {
    // if (myBooks[index].count > 1) {
    //   myBooks[index].count--
    //   props.onSetState(['myBooks'], myBooks)
    // }
    props.onDispatch(actionCreator.myBooks({ id , operation: 'sub' } ,'patch'))
  }

  //删除
  const handleDelete = (ids) => {
    // myBooks.splice(index, 1)
    // props.onSetState(['myBooks'], myBooks)
    props.onDispatch(actionCreator.myBooks({ ids }, 'delete'))
  }

  //复选框
  const handleChecked = (id, e) => {
    props.onDispatch(actionCreator.myBooks({ id, operation: 'checked', checked: e.target.checked }, 'patch'))
  }

  //删除选中的
  const handleDeleteChecked = () => {
    let ids = myBooks.filter(item => item.checked).map(item => item.id)
    props.onDispatch(actionCreator.myBooks({ ids }, 'delete'))
  }

  //渲染dom列表
  let myBooksDom = myBooks.map(item => (
    <div key={item.id}>
      <label>
        <input type="checkbox" checked={item.checked} onChange={(e) => handleChecked(item.id, e)}></input>
        {item.title}
      </label>
      ,￥{item.price},<button onClick={() => handleSub(item.id)}>减</button> {item.count}<button onClick={() => handleAdd(item.id)}>加</button>
      <button onClick={() => handleDelete([item.id])}>删除</button>
    </div>
  ))

  //总价
  let totalPrice = myBooks.filter(item => item.checked).reduce((total, item) => {
    return total + item.price * item.count
  }, 0)

  return (
    <div className="m-main">
      {myBooksDom}
      <div>
        <button onClick={() => handleDeleteChecked()}>删除</button>
        总价:￥{totalPrice}
      </div>
    </div>
  )
}

//相当于vuex里计算属性，取值
const mapStateToProps = (state) => {
  return {
    myBooks: state.getIn(['task', 'myBooks']).toJS()
  }
}

//相当于提交mutation，改值
const mapDispatchToProps = (dispatch) => {
  return {
    onSetState(key, value) {
      dispatch({type: 'SET_STATE', key, value})
    },
    //异步
    onDispatch(action) {
      dispatch(action)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyBooks)
