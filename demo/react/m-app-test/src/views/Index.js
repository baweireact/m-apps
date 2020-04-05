import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import MyBooks from './MyBooks'
import Me from './Me'

const Index = () => {
  return (
    <div className="m-wrap">
      <Header></Header>
      <Switch>
        <Route path="/index/home" component={Home}></Route>
        <Route path="/index/my_books" component={MyBooks}></Route>
        <Route path="/index/me" component={Me}></Route>
      </Switch>
      <Footer></Footer>
    </div>
  )
}

export default Index
