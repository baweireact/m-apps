import React, { Component } from 'react'
import Icon from './Icon'

export default class Stars extends Component {
  render() {
    let { count } = this.props
    let arr = []
    //for循环生成一个虚拟dom数组，把数组插入页面里
    for (let i = 0; i < 5; i++) {
      arr.push(<Icon name="xingxing" key={i} className={`m-star ${ i < count ? 'active' : ''}`}></Icon>)
    }
    return (
      <div>{arr}</div>
    )
  }
}
