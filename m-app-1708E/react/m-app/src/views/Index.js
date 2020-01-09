import React, { Component, Suspense, lazy } from 'react'
import { Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Home from './Home'
import Loading from '../components/Loading'
//import MyBook from './MyBook'
import Me from './Me'
//const MyBook = lazy(() => import('./MyBook'))
const MyBook = lazy(async () => {
  return await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(import('./MyBook'))
    }, 2000)
  })
})

class Index extends Component {
  handleRoute(title, component) {
    this.props.onSetState(['title'], title)
    return component
  }
  render() {
    return (
      <div className="m-wrap">
        <Header></Header>
        <Suspense fallback={<div className="m-main"><Loading lazyLoading={true}></Loading> </div>}>
          <Switch>
            <Route path="/index/home" render={() => this.handleRoute('小米书城', <Home></Home>)}></Route>
            <Route path="/index/my_book" render={() => this.handleRoute('书包', <MyBook></MyBook>)}></Route>
            <Route path="/index/me" render={() => this.handleRoute('个人中心', <Me></Me>)}></Route>
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
    title: state.getIn(['title']),
    myBook: state.getIn(['myBook']).toJS()
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
