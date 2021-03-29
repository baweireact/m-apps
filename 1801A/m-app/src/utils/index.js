import React, { Component } from 'react'

export const withRouter = (WrappedComponent) => {
  return class extends Component {
    render() {
      let history = window.myHistory
      return <WrappedComponent history={history} {...this.props}></WrappedComponent>
    }
  }
}