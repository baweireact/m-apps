import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
      <div className="m-header">
        金额：{this.props.score}￥
      </div>
    )
  }
}
