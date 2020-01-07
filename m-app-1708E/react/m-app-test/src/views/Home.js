import React, { Component } from 'react'
import Sidebar from '../components/Sidebar'
import List from '../components/List'

export default class Home extends Component {
  render() {
    return (
      <div className="m-main m-home">
        <Sidebar></Sidebar>
        <List></List>
      </div>
    )
  }
}
