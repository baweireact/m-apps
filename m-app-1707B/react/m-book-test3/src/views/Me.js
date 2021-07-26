import React, { Component } from 'react'
import Api from '../api'

export default class Me extends Component {
  handleClick() {
    Api.voice({pageNum: 1, pageSize: 10}).then(res => {
      console.log(res)
    })
  }
  render() {
    return (
      <div className="m-center">
        me
        <button onClick={() => this.handleClick()}>按钮</button>
      </div>
    )
  }
}
