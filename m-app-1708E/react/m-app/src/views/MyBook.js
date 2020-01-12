import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import Icon from '../components/Icon'
import Api from '../api'
import toast from '../components/toast'
import Toast from 'toast-xu'

const MyBook = (props) => {
  let { myBook } = props

  const handleCheck = (index, e) => {
    myBook[index].checked = e.target.checked
    props.onSetState(['myBook'], myBook)
  }

  const handleAdd = (index) => {
    myBook[index].count++
    props.onSetState(['myBook'], myBook)
  }

  const handleSub = (index) => {
    if (myBook[index].count > 1) {
      myBook[index].count--
      props.onSetState(['myBook'], myBook)
    }
  }

  const handleCount = (index, e) => {
    myBook[index].count = e.target.value.replace(/[^\d]/g, '') - 0
    props.onSetState(['myBook'], myBook)
  }

  const handleDelete = (index) => {
    myBook.splice(index, 1)
    props.onSetState(['myBook'], myBook)
  }

  const handleCheckAll = (e) => {
    myBook.forEach(item => {
      item.checked = e.target.checked
    })
    props.onSetState(['myBook'], myBook)
  }

  const handleDeleteChecked = () => {
    if (myBook.filter(item => item.checked).length === 0) {
      //alert('请选择要删除的商品~')
      toast({ 
        title: '请选择要删除的商品~', 
        duration: 3000, 
        onClose: () => {
          console.log('close')
        } 
      })
    }
  }

  useEffect(() => {
    Api.update({ myBookNew: myBook })
  }, [myBook])

  let myBookDom = myBook.map((item, index) => (
    <div key={item.id} className="m-my-book-item">
      <div className="m-my-book-info">
        <label>
          <input type="checkbox" checked={item.checked} onChange={(e) => handleCheck(index, e)}></input>
          {item.title} ￥{item.price}
        </label>
      </div>
      <div className="m-my-book-action">
        <button className="m-btn" onClick={() => handleSub(index)}>-</button>
        <input className="m-count" value={item.count} placeholder="数量" onChange={(e) => handleCount(index, e)} />
        <button className="m-btn" onClick={() => handleAdd(index)}>+</button>
        <Icon type="guanbi" onClick={() => handleDelete(index)}></Icon>
      </div>
    </div>
  ))

  let totalPrice = 0, totalCount = 0
  myBook.filter(item => item.checked).forEach(item => {
    totalPrice += item.price * item.count
    totalCount += item.count
  })
  let checkedAll = myBook.every(item => item.checked)

  return (
    <div className="m-main m-my-book">
      {myBookDom}
      {
        myBook.length > 0 ?
        <div>
          <div>
            <label>
              <input type="checkbox" checked={checkedAll} onChange={(e) => handleCheckAll(e)}></input>全选
            </label>
            <button className="m-btn" onClick={() => handleDeleteChecked()}>删除</button>
          </div>
          <div>
            总价：￥{totalPrice} 总数：{totalCount}
          </div>
        </div>
        : <div>空空如也~~~</div>
      }
    </div>
  )
}

//从仓库里取值，相当于使用vuex时，组件里使用computed取仓库里的值
const mapStateToProps = (state) => {
  return {
    title: state.getIn(['title']),
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

export default connect(mapStateToProps, mapDispatchToProps)(MyBook)
