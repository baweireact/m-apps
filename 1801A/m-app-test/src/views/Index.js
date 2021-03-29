import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Home from './index/Home'
import MyBooks from './index/MyBooks'
import Me from './index/Me'

//一级路由
export default class Index extends Component {
  render() {
    return (
      <div className="m-wrap">
        <Header></Header>
        <Switch>
          {/* 二级路由 */}
          <Route path="/index/home" component={Home}></Route>
          <Route path="/index/my_books" component={MyBooks}></Route>
          <Route path="/index/me" component={Me}></Route>
        </Switch>
        <Footer></Footer>
      </div>
    )
  }
}
