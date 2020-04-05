import React from 'react'
import { connect } from 'react-redux'

const Header = (props) => {
  let { title } = props
  return (
    <div className="m-header">
      {title}
    </div>
  )
}

//相当于vuex里计算属性，取值
const mapStateToProps = (state) => {
  return {
    title: state.getIn(['title'])
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

export default connect(mapStateToProps, mapDispatchToProps)(Header)
