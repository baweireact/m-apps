import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Home from './Home'
import MyBook from './MyBook'


export default class Index extends Component {
  render() {
    return (
      <div className="m-wrap">
        <Header></Header>
        <Switch>
          <Route path="/index/home" component={Home}></Route>
          <Route path="/index/my_book" component={MyBook}></Route>
        </Switch>
        <Footer></Footer>
      </div>
    )
  }
}
