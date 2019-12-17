import React, { Component } from 'react'

export default class Home extends Component {
  handleNext(type) {
    this.props.history.push('/exam/' + type)
  }
  render() {
    return (
      <div>
        <button onClick={this.handleNext.bind(this, 'add')}>加</button>
        <button onClick={this.handleNext.bind(this, 'sub')}>减</button>
        <button onClick={this.handleNext.bind(this, 'multi')}>乘</button>
        <button onClick={this.handleNext.bind(this, 'compare')}>比较</button>
      </div>
    )
  }
}
