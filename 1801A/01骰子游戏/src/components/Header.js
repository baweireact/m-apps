import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
      <div className="m-header">
        {this.props.score}
      </div>
    )
  }
}
