import React, { Component } from 'react'
import Nav from '../components/Nav'

export default class Index extends Component {
  render() {
    window.myHistory = this.props.history
    return (
      <div>
        <Nav name='hello'></Nav>
      </div>
    )
  }
}
