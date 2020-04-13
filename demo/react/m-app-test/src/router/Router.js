import React, { Suspense, lazy } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Login from '../views/Login' 
//import Index from '../views/Index'
import Detail from '../views/Detail'
const Index = lazy(() => import('../views/Index'))


const Router = () => {
  return (
    <div>
      <Suspense fallback={<div>loading</div>}>
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

export default Router
