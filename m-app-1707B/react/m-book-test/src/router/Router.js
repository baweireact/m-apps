import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Login from '../views/Login'
import Index from '../views/Index'
import Detail from '../views/Detail'
import Test from '../views/Test'
import Loading from '../components/Loading'
import Exam from '../views/Exam'

export default class Router extends Component {
  render() {
    return (
      <>
        <Switch>
          <Redirect from="/" to="/login" exact></Redirect>
          <Route path="/login" component={Login}></Route>
          <Route path="/index" component={Index}></Route>
          <Route path="/detail/:id" component={Detail}></Route>
          <Route path="/test" component={Test}></Route>
          <Route path="/exam" component={Exam}></Route>
        </Switch>
        <Loading></Loading>
      </>
    )
  }
}
