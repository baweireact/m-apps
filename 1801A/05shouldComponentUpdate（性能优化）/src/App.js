import React, { Component } from 'react'
import Icon from './components/Icon'

export default class App extends Component {
  state = {
    //传给子组件的
    visible: false,

    //只在父组件里使用
    count: 0
  }

  handleVisible() {
    this.setState({
      visible: !this.state.visible
    })
  }

  handleAdd() {
    this.setState({
      count: this.state.count + 1
    })
  }

  render() {
    return (
      <div>
        <div>
          <button onClick={() => this.handleVisible()}>按钮</button>
          <button onClick={() => this.handleAdd()}>加</button>
        </div>
        <div>{this.state.count}</div>
        <Icon visible={this.state.visible}></Icon>
      </div>
    )
  }
}
