import React, { Component } from 'react'
import Icon from './Icon'

export default class Stars extends Component {
  render() {
    let { count } = this.props
    let arr = []
    for (let i = 0; i < 5; i++) {
      arr.push(<Icon name="xingxing" className={'m-star ' + (i < count ? 'active' : '')}></Icon>)
    }
    return (
      <div>
        {
          arr
        }
      </div>
    )
  }
}
