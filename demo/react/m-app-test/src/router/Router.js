import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Login from '../views/Login' 

const Router = () => {
  return (
    <div>
      <Switch>
        <Redirect from="/" to="/login" exact></Redirect>
        <Route path="/login" component={Login}></Route>
      </Switch>
    </div>
  )
}

export default Router
