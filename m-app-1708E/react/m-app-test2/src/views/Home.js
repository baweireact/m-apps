import React from 'react'
import Sidebar from '../components/Sidebar'
import List from '../components/List'

const Home = () => {
  return (
    <div className="m-main m-home">
      <Sidebar></Sidebar>
      <List></List>
    </div>
  )
}

export default Home