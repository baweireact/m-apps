import React, { Component, Suspense, lazy } from 'react'
import { Switch, Route } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Home from './Home'
//import MyBook from './MyBook'  //没有懒加载
import Me from './Me'
import Loading from '../components/Loading'

//路由懒加载
// const MyBook = lazy(() => import('./MyBook'))

//懒加载 有延时
// const MyBook = lazy(async () => {
//   return await new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(import('./MyBook'))
//     }, 5000)
//   })
// })  

//懒加载 有延时，第二种写法
const MyBook = lazy(async () => {
  let component
  await new Promise((resolve) => {
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
        <Suspense fallback={<div className="m-main"><Loading lazyLoading={true}></Loading></div> }>
          <Switch>
            <Route path="/index/home" component={Home}></Route>
            <Route path="/index/my_book" component={MyBook}></Route>
            <Route path="/index/me" component={Me}></Route>
          </Switch>
        </Suspense>
        <Footer></Footer>
      </div>
    )
  }
}
