import React, { Component } from 'react'

export default class Icon extends Component {

  //性能优化
  shouldComponentUpdate(nextProps) {
    if (nextProps.visible === this.props.visible) {
      return false
    } else {
      return true
    }
  }

  render() {
    console.log('渲染子组件')

    let arrDom = []

    for (let i = 0; i < 50000; i++) {
      arrDom.push(<div key={i}>{'子组件:' + (this.props.visible ? '显示' : '隐藏')}</div>)
    }
    
    return (
      <div>
        {arrDom}        
      </div>
    )
  }
}
