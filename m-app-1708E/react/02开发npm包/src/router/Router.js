import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Index from '../views/Index'

const Router = () => {
  return (
    <div>
      <Switch>
        <Redirect from="/" to="/index/toast" exact></Redirect>
        <Route path="/index" component={Index}></Route>
      </Switch>
    </div>
  )
}

export default Router