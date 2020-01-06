import React, { Component } from 'react'
import { Switch, Redirect, Route } from 'react-router-dom'
import Login from '../views/Login'

export default class Router extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Redirect from="/" to="/login" exact></Redirect>
          <Route path="/login" component={Login}></Route>
        </Switch>
      </div>
    )
  }
}
