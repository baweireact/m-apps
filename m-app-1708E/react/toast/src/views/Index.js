import React from 'react'
import { Switch, Route, NavLink } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import config from '../router/config'

const Index = () => {

  let RouteListDom = config.map(item => (
    <Route key={item.path} path={item.path} component={item.component}></Route>
  ))

  return (
    <div className="m-wrap" >
      <Sidebar></Sidebar>
      {
        <Switch>
          {RouteListDom}
        </Switch>
      }
    </div>
  )
}

export default Index