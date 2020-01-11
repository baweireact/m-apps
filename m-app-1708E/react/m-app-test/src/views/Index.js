import React, { Component, Suspense, lazy } from 'react'
import { Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Home from './Home'
//import MyBook from './MyBook'
import Me from './Me'
import Loading from '../components/Loading'
//https://zh-hans.reactjs.org/docs/code-splitting.html#reactlazy
//const MyBook = lazy(() => import('./MyBook'))  //懒加载

// const MyBook = lazy(async () => {
//   return await new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(import('./MyBook'))
//     }, 5000)
//   })
// })

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

class Index extends Component {
  renderComponent(title, component) {
    this.props.onSetState(['title'], title)
    return component
  }
  
  render() {
    return (
      <div className="m-wrap">
        <Header></Header>
        <Suspense fallback={<div className="m-main"><Loading lazyLoading={true}></Loading></div>}>
          <Switch>
            <Route path="/index/home" render={() => this.renderComponent('小米书城', <Home></Home>)}></Route>
            <Route path="/index/my_book" render={() => this.renderComponent('书包', <MyBook></MyBook>)}></Route>
            <Route path="/index/me" render={() => this.renderComponent('个人中心', <Me></Me>)}></Route>
          </Switch>
        </Suspense>
        <Footer></Footer>
      </div>
    )
  }
}

//从仓库里取值，相当于使用vuex时，组件里使用computed取仓库里的值
const mapStateToProps = (state) => {
  return {
    title: state.getIn(['title'])
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    //同步，相当于vuex里提交mutation
    onSetState(key, value) {
      dispatch({ type: 'SET_STATE', key, value })
    },
    //异步，相当于vuex里提交action
    onDispatch(action) {
      dispatch(action)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Index)