import React, { Component, Suspense, lazy } from 'react'
import { Switch, Route } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Home from './Home'
//import MyBook from './MyBook'  //无懒加载
import Me from './Me'
//const MyBook = lazy(() => import('./MyBook'))  //有懒加载
import Loading from '../components/Loading'

//懒加载延时1
// const MyBook = lazy(async () => {
//   return await new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(import('./MyBook'))
//     }, 500)
//   })
// })

//懒加载延时2
const MyBook = lazy(async () => {
  let component
  await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(import('./MyBook'))
    }, 500)
  }).then(res => {
    component = res
  })

  return component
})

export default class Index extends Component {
  render() {
    return (
      <div className="m-wrap">
        <Header></Header>
        <Suspense fallback={<div className="m-main"><Loading lazyLoading={true}></Loading></div>}>
          <Switch>
            <Route path="/index/home" component={Home}></Route>
            <Route path="/index/my_book" component={MyBook}></Route>
            <Route path="/index/me" component={Me}></Route>
          </Switch>
        </Suspense>
        <Footer></Footer>
        <Loading></Loading>
      </div>
    )
  }
}
