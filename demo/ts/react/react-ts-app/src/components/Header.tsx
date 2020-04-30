import React, { Dispatch } from 'react'
import { connect } from 'react-redux'
import { IStore } from '../types'

interface IProps {
  title: string
}

const Header = (props: IProps) => {
  const { title } = props
  return (
    <div className="m-header">
      {title}
    </div>
  )
}

const mapStateToProps = (state: IStore) => {
  return {
    title: state.book.title
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

export default connect(mapStateToProps, mapDispatchToProps)(Header)
