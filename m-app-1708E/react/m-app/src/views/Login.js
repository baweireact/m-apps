import React, { Component } from 'react'
import { connect } from 'react-redux'

class Login extends Component {
  render() {
    let { obj, count } = this.props
    return (
      <div>
        {obj.count}
        <div>
          <button onClick={this.props.add}>加</button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    obj: state.obj,
    count: state.count
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    add() {
      dispatch({ type: 'ADD' })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
