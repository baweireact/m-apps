import React, { Suspense, lazy } from 'react'
import { Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import Header from '../components/Header'
import Footer from '../components/Footer'
const Home = lazy(() => import('./Home'))
const MyBooks = lazy(() => import('./MyBooks'))
const Me = lazy(() => import('./Me'))

const Index = (props) => {

  const renderComponent = (component, title) => {
    
    setTimeout(() => {
      props.onSetState(['title'], title)
    })
    return component
  }

  return (
    <div className="m-wrap">
      <Header></Header>
      <Suspense fallback={<div className="m-main">loading</div>}>
        <Switch>
          <Route path="/index/home" render={() => renderComponent(<Home></Home>, '小米书城')}></Route>
          <Route path="/index/my_books" render={() => renderComponent(<MyBooks></MyBooks>, '我的书包')}></Route>
          <Route path="/index/me" render={() => renderComponent(<Me></Me>, '个人中心')}></Route>
        </Switch>
      </Suspense>
      <Footer></Footer>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    title: state.getIn(['title'])
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSetState(key, value) {
      dispatch({ type: 'SET_STATE', key, value })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Index)