import React, { Component } from 'react'
import Icon from './components/Icon'

export default class App extends Component {

  state = {
    count: 0
  }

  handleAdd() {
    //为啥不能直接写加加
    this.setState({
      count: this.state.count + 1
    })
  }

  componentWillUpdate() {
    console.log('3.父组件更新前')
  }

  componentDidUpdate() {
    console.log('6.父组件更新完')
  }

  render() {
    console.log('1.渲染父组件')
    return (
      <div>
        {this.state.count}
        <div>
          <button onClick={() => this.handleAdd()}>加</button>
        </div>
        <Icon></Icon>
      </div>
    )
  }
}
