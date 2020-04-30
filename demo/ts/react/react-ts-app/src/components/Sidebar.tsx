import React, { Dispatch } from 'react'
import { connect } from 'react-redux'
import { IStore, IList } from '../types'

interface IProps {
  list: IList[],
  currentId: number,
  onSetState: (key: string, value: any) => void
  onDispatch: (action: Function) => void
}

let timer: any
const Sidebar = (props: IProps) => {
  const { list, currentId } = props

  const handleNav = (id: number) => {
    props.onSetState('currentId', id);
    props.onSetState('isRealScroll', false)
    //@ts-ignore
    document.getElementById(id + '').scrollIntoView({ block: 'start', behavior: 'smooth' })

    clearTimeout(timer)
    timer = setTimeout(() => {
      props.onSetState('isRealScroll', true)
    }, 1000)
  }

  const sidebarDom = list.map((item: IList) => (
    <div key={item.id} className={`m-sidebar-item ${currentId === item.id ? 'active' : ''}`} onClick={() => handleNav(item.id) }>{item.title}</div>
  ))

  return (
    <div className="m-sidebar">
      {sidebarDom}
    </div>
  )
}

const mapStateToProps = (state: IStore) => {
  return {
    list: state.book.list,
    currentId: state.book.currentId
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

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)
