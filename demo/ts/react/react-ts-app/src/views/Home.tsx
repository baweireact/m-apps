import React, { useEffect, Dispatch } from 'react'
import { connect } from 'react-redux'
import Sidebar from '../components/Sidebar'
import List from '../components/List'
import actionCreator from '../store/book/actionCreator'

interface IProps {
  onSetState: (key: string, value: any) => void
  onDispatch: (action: Function) => void
}

const Home = (props: IProps) => {
  let { onDispatch } = props

  useEffect(() => {
    onDispatch(actionCreator.list())
  }, [onDispatch])

  return (
    <div className="m-main m-home">
      <Sidebar></Sidebar>
      <List></List>
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

export default connect(mapStateToProps, mapDispatchToProps)(Home)
