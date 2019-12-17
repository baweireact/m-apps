import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Home from '../views/Home'
import Exam from '../views/Exam'

export default class Router extends Component {
  render() {
    return (
      <Switch>
        <Redirect from="/" to="/home" exact></Redirect>
        <Route path="/home" component={Home}></Route>
        <Route path="/exam/:type" component={Exam}></Route>
      </Switch>
    )
  }
}
