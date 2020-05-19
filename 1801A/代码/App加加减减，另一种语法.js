import React, { Component } from 'react'

export default class App extends Component {
  state = {
    count: 0
  }

  handleAdd() {
    this.setState({
      count: this.state.count + 1
    })
  }

  render() {
    return (
      <div>
        {this.state.count}
        <div>
          <button onClick={this.handleAdd.bind(this)}>加</button>
        </div>
      </div>
    )
  }
}

