import React, { Component } from 'react'

export const contrilItem = (options) => (WrapComponent) => {
  return class extends Component {

    handleChange(e) {
      this.props.onChange(e)
    }

    render() {
      console.log(options)
      return (
        <WrapComponent {...options} onChange={(e) => this.handleChange(e) }></WrapComponent>
      )
    }
  }
}
