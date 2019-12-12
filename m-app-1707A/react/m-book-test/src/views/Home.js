import React, { Component } from 'react'
import Sidebar from '../components/Sidebar'
import List from '../components/List'

class Home extends Component {
  render() {
    return (
      <div className="m-main">
        <div className="m-home">
          <Sidebar></Sidebar>
          <List></List>
        </div>
      </div>
    )
  }
}

export default Home
