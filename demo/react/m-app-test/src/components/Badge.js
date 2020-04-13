import React, { Component } from 'react'

export default class Badge extends Component {
  render() {
    let { children, count } = this.props
    if (count > 99) {
      count = '99+'
    }
    return (
      <span className="m-badge-wrap">
        {children}
        { (typeof count === 'string' || count > 0) && <span className="m-badge">{count}</span>}
      </span>
    )
  }
}
