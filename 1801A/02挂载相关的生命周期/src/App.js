import React, { Component } from 'react'
import Icon from './components/Icon'

export default class App extends Component {

  state = {
    visible: true
  }

  handleVisible() {
    this.setState({
      visible: !this.state.visible
    })
  }

  //挂载前
  componentWillMount() {
    console.log('1.父组件挂载前（废弃了）')
  }

  //挂载完，真实dom渲染完
  componentDidMount() {
    console.log('6.父组件挂载完')
  }

  render() {
    console.log('2.渲染父组件')
    
    return (
      <div>
        <div>
          <button onClick={() => this.handleVisible()}>按钮</button>
        </div>
        { this.state.visible ? <Icon></Icon> : null }
      </div>
    )
  }
}
