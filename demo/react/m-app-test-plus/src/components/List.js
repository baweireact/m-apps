import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import LazyLoad from 'react-lazy-load'
import BScroll from 'better-scroll'

let scroll;

const List = (props) => {
  let { list, currentId } = props

  useEffect(() => {
    const wrapper = document.querySelector('.wrapper')
    scroll = new BScroll(wrapper)
    //scroll.scrollToElement(document.getElementById('1'))
    
  }, [props])

  const handleScroll = () => {
    //scroll.scrollTo(0, -100)
    
  }

  useEffect(() => {
    if (currentId === 0) {
      scroll.scrollTo(0, -1, 200)
    } else {
      scroll.scrollToElement(document.getElementById(currentId), 200)
    }
  }, [currentId])

  let listDom = list.map(category => (
    <div key={category.id} id={ category.id }>
      <div className="m-category-title">{category.title}</div>
      {
        category.list.map(book => (
          <div key={book.id} className="m-list-item">
            <div className="m-img-wrap">
              <img src={book.avatar} className="m-list-img"></img>
            </div>
            <div>{book.title}</div>
          </div>
        ))
      }
    </div>
  ))

  return (
      <div className="m-list wrapper" id="m-list">
        <div className="content">
          {listDom}
        </div> 
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
