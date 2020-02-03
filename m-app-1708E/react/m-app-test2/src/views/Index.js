import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Home from './Home'
import MyBook from './MyBook'
import Me from './Me'

const Index = () => {
  return (
    <div className="m-wrap">
      <Header></Header>
      <Switch>
        <Route path="/index/home" component={Home}></Route>
        <Route path="/index/my_book" component={MyBook}></Route>
        <Route path="/index/me" component={Me}></Route>
      </Switch>
      <Footer></Footer>
    </div>
  )
}

export default Index