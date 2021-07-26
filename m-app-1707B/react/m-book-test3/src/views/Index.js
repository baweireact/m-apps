import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import Header from '../components/Header'
import Home from './Home'
import MyBook from './MyBook'
import Me from './Me'
import Bottom from '../components/Bottom'

class Index extends Component {

  handleRender(Component, title) {
    setTimeout(() => {
      this.props.onSetState(['title'], title)
    })
    
    return Component
  }

  render() {
    return (
      <div className="m-index">
        <Header></Header>
        <Switch>
          <Route path="/index/home" render={() => this.handleRender(<Home></Home>, '小米书城')}></Route>
          <Route path="/index/my_book" render={() => this.handleRender(<MyBook></MyBook>, '书包')}></Route>
          <Route path="/index/me" render={() => this.handleRender(<Me></Me>, '个人中心')}></Route>
        </Switch>
        <Bottom></Bottom>
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {

  }
}

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

export default connect(mapStateToProps, mapDispatchToProps)(Index)