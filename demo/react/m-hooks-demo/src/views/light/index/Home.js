import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { withRouter, Route } from 'react-router-dom'

function Index(props) {
  const [state, setState] = useState(1)

  const handleClick = () => {
    props.onSetState(['count'], props.count +1)
  }

  useEffect(() => {
    console.log('home effect')
  }, [])


  return (
    <div>
      <div>{state}</div>
      <div>{props.count}</div>
      <button onClick={() => setState(preValue => preValue + 1)}>按钮</button>
      <button onClick={() => handleClick()}>按钮</button>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    count: state.getIn(['light', 'count']),
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSetState(key, value) {
      dispatch({ type: 'SET_LIGHT_STATE', key, value })
    },
    onDispatch(action) {
      dispatch(action)
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Index))
