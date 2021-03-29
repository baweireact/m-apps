import React, { Component } from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import Login from './views/Login'
import Index from './views/Index'
import Detail from './views/Detail'

//BrowserRouter 路由跟组件
//Switch  只渲染匹配上的第一个路由
//Redirect 重定向
//Route  路由组件
//exact  精准匹配

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Redirect from="/" to="/login" exact></Redirect>
          <Route path="/login" component={Login}></Route>
          <Route path="/index" component={Index}></Route>
          <Route path="/detail/:id" component={Detail}></Route>
        </Switch>
      </BrowserRouter>
    )
  }
}
