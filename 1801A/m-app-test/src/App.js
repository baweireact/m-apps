import React, { Component } from 'react'
import Icon from './components/Icon'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: false
    }
  }

  handleVisible(id) {
    this.setState({
      visible: !this.state.visible
    })
    console.log(id)
  }

  render() {
    let { visible } = this.state
    return (
      <div>
        <Icon name={ visible ? "show" : 'hide' } onClick={(id) => this.handleVisible(id)}></Icon>
      </div>
    )
  }
}


