import React, { Dispatch, ReactElement } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import Home from './Home'
import MyBooks from './MyBooks'
import Me from './Me'

interface IProps {
  onSetState: (key: string, value: any) => void
  onDispatch: (action: Function) => void
}

const Index = (props: IProps) => {
  const renderComponent = (Component: ReactElement, title: string) => {
    setTimeout(() => {
      props.onSetState('title', title)
    })
    
    return Component
  }

  return (
    <div className="m-wrap">
      <Header></Header>
      <Switch>
        <Route path="/index/home" render={() => renderComponent(<Home></Home>, '小米书城')}></Route>
        <Route path="/index/my_books" render={() => renderComponent(<MyBooks></MyBooks>, '我的书包')}></Route>
        <Route path="/index/me" render={() => renderComponent(<Me></Me>, '个人中心')}></Route>
      </Switch>
      <Footer></Footer>
    </div>
  )
}

const mapStateToProps = () => {
  return {
  }
}

const mapDispatchToProps = (dispatch: Dispatch<any>) => {
  return {
    onSetState(key: string, value: any) {
      dispatch({ type: 'SET_STATE', key, value })
    },
    onDispatch(action: Function) {
      dispatch(action)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Index)
