import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Home from './Home'
import MyBook from './MyBook'
import Me from './Me'

const Index = (props) => {
  const renderRoute = (component, title) => {
    props.onSetState(['title'], title)
    return component
  }
  return (
    <div className="m-wrap">
      <Header></Header>
      <Switch>
        <Route path="/index/home" render={() => renderRoute(<Home></Home>, '小米书城')}></Route>
        <Route path="/index/my_book" render={() => renderRoute(<MyBook></MyBook>, '我的书包')}></Route>
        <Route path="/index/me" render={() => renderRoute(<Me></Me>, '个人中心')}></Route>
      </Switch>
      <Footer></Footer>
    </div>
  )
}

//取全局store里的数据
const mapStateToProps = (state) => {
  return {
  }
}

//改全局store里的数据
const mapDispatchToProps = (dispatch) => {
  return {
    //同步
    onSetState(key, value) {
      dispatch({ type: 'SET_STATE', key, value })
    },
    //异步
    onDispatch(action) {
      dispatch(action)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Index)