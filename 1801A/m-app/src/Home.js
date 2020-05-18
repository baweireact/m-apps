import React, { Component } from 'react'
import Icon from './components/Icon'

export default class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0,
      visible: true
    }
  }

  handleAdd() {
    let { count } = this.state
    this.setState({
      count: count + 1
    })
  }

  handleVisible() {
    this.setState({
      visible: !this.state.visible
    })
  }

  render() {
    console.log('渲染父组件')
    let { count, visible } = this.state
    return (
      <div>
        <div>
          {count}
        </div>
        <div>
          <button onClick={ () => this.handleAdd() }>加</button>
          <button onClick={ () => this.handleVisible() }>{ visible ? '隐藏' : '显示'}</button>
        </div>
        <Icon visible={visible}></Icon>
      </div>
    )
  }
}
