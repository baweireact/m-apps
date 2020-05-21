import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
      <div className="m-footer">
        <button onClick={() => this.props.onStart(1)}>大</button>
        <button onClick={() => this.props.onStart(2)}>豹子</button>
        <button onClick={() => this.props.onStart(0)}>小</button>
      </div>
    )
  }
}
