import React, { Component } from 'react'
import { contrilItem } from "../utils"

class Select extends Component {
  render() {
    return (
      <select {...this.props}>
        <option value="男">男</option>
        <option value="女">女</option>
      </select>
    )
  }
}
export default contrilItem({ })(Select)
