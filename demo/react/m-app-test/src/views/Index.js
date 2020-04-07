import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import MyBooks from './MyBooks'
import Me from './Me'
import { connect } from 'react-redux'

const Index = (props) => {
  const handleRender = (component, title) => {

    setTimeout(() => {
      console.log(title)
      props.onSetState(['title'], title)
    })
    return component
  }
  return (
    <div className="m-wrap">
      <Header></Header>
      <Switch>
        <Route path="/index/home" render={ () => handleRender(<Home></Home>, '小米书城') } ></Route>
        <Route path="/index/my_books" render={ () => handleRender(<MyBooks></MyBooks>, '我的书包') }></Route>
        <Route path="/index/me" render={ () => handleRender(<Me></Me>, '个人中心') }></Route>
      </Switch>
      <Footer></Footer>
    </div>
  )
}

//相当于vuex里计算属性，取值
const mapStateToProps = (state) => {
  return {
    title: state.getIn(['title'])
  }
}

//相当于提交mutation，改值
const mapDispatchToProps = (dispatch) => {
  return {
    onSetState(key, value) {
      dispatch({type: 'SET_STATE', key, value})
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Index)
