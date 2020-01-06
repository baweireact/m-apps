import React, { Component, Suspense, lazy } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Index from '../views/Index'
const Login = lazy(() => import('../views/Login'))

export default class Router extends Component {
  render() {
    return (
      <div>
        <Suspense fallback={<div>loading...</div>}>
          <Switch>
            <Redirect from="/" to="/login" exact></Redirect>
            <Route path="/login" component={Login}></Route>
            <Route path="/index" component={Index}></Route>
          </Switch>
        </Suspense>
      </div>
    )
  }
}
