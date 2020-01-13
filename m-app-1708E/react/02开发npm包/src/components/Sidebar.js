import React from 'react'
import { NavLink } from 'react-router-dom'
import config from '../router/config'

const Sidebar = () => {

  let sidebarDom = config.map(item => (
    <NavLink key={item.path} to={item.path} className="m-sidebar-item ">
      {item.name}
    </NavLink>
  ))

  return (
    <div className="m-sidebar">
      {sidebarDom}
    </div>
  )
}

export default Sidebar