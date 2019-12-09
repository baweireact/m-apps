import React, { Component } from 'react'
import { Switch, Redirect, Route } from 'react-router-dom'
import Login from '../views/Login'
import Index from '../views/Index'

export default class Router extends Component {
  render() {
    return (
      <Switch>
        <Redirect from='/' to='/login' exact></Redirect>
        <Route path='/login' component={Login}></Route>
        <Route path="/index" component={Index}></Route>
      </Switch>
    )
  }
}
