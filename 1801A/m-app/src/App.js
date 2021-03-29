import React, { Component } from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import Login from './views/Login'
import Index from './views/Index'

export default class App extends Component {
  render() {
    
    return (
      <BrowserRouter>
        <Switch>
          <Redirect from="/" to="/login" exact></Redirect>
          <Route path="/login" component={Login}></Route>
          <Route path="/index" component={Index}></Route>
        </Switch>
      </BrowserRouter>
    )
  }
}
