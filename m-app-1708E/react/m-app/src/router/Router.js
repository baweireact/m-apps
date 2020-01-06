import React, { Component, Suspense, lazy } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
const Login = lazy(() => import('../views/Login'))

export default class Router extends Component {
  render() {
    return (
      <div>
        <Suspense fallback={<div>loading...</div>}>
          <Switch>
            <Redirect from="/" to="/login" exact></Redirect>
            <Route path="/login" component={Login}></Route>
          </Switch>
        </Suspense>
      </div>
    )
  }
}
