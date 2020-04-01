import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import LazyLoad from 'react-lazy-load'
import Stars from './Stars'
import Dialog from './Dialog'

let topArr = []
const List = (props) => {
  let { list, isRealScroll } = props
  let [ visible, setVisible ] = useState(false)

  const handleScroll = (e) => {
    let scrollTop = e.target.scrollTop + 40
    if (isRealScroll) {
      for (let i = 0; i < topArr.length - 1; i++) {
        if (topArr[i] <= scrollTop && scrollTop < topArr[i + 1]) {
          props.onSetState(['currentId'], i)
        }
      }
    }
  }

  const handleShowDialog = () => {
    setVisible(true)
  }

  const handleCancel = () => {
    setVisible(false)
  }

  useEffect(() => {
    topArr = Array.from(document.getElementsByClassName('js-category')).map(item => item.offsetTop)
    topArr.push(Infinity)
  }, [props])


  let listDom = list.map(category => (
    <div key={category.id} id={category.id} className="js-category">
      <div className="m-list-category-title">{category.title}</div>
      {
        category.list.map(book => (
          <div key={book.id} className="m-list-item">
            <LazyLoad className="m-list-img-wrap">
              <img src={book.avatar} className="m-list-img"></img>
            </LazyLoad>
            <div className="m-list-info">
              {book.title}
              <Stars count={book.stars}></Stars>
              <button onClick={() => handleShowDialog()}>添加</button>
            </div>
          </div>
        ))
      }
    </div>
  ))
  return (
    <div className="m-list" onScroll={(e) => handleScroll(e)}>
      {listDom}
      <Dialog visible={visible} title="添加" onCancel={() => handleCancel()} ></Dialog>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    list: state.getIn(['list']).toJS(),
    isRealScroll: state.getIn(['isRealScroll'])
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSetState(key, value) {
      dispatch({ type: 'SET_STATE', key, value })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(List)
