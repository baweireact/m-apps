import React, { Component, Suspense, lazy } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Index from '../views/Index'
import Detail from '../views/Detail'
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
            <Route path="/detail/:id" component={Detail}></Route>
          </Switch>
        </Suspense>
      </div>
    )
  }
}
