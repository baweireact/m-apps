import React, { Component } from 'react'
import Icon from './Icon'

export default class Stars extends Component {
  render() {
    let { count } = this.props
    let starsDom = []
    for (let i = 0; i < 5; i++) {
      starsDom.push((
        <Icon key={i} type="iconfontxingxing" className={"m-star " + ( i < count ? 'active' : '')}></Icon>
      ))
    }
    return (
      <div>
        {starsDom}
      </div>
    )
  }
}
