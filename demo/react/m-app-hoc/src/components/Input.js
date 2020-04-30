import React, { Component } from 'react'
import { contrilItem } from '../utils'

class Input extends Component {
  render() {
    return (
      <input {...this.props}></input>
    )
  }
}

export default contrilItem({ placeholder: '请输入用户名' })(Input)