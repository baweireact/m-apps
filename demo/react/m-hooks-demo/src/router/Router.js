import React, { Suspense, lazy } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
const Index = lazy(() => import('../views/light/index/Index'))

export default function Router() {
  return (
    <>
      <Suspense fallback={null}>
        <Switch>
          <Redirect from="/" to="/light/index" exact></Redirect>
          <Route path="/light/index" component={Index}></Route>
        </Switch>
      </Suspense>
    </>
  )
}
