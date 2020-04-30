import React, { Component, MouseEvent } from 'react'

interface IProps {
  name: string,
  className?: string,
  onClick?: (e: MouseEvent, count: number) => void
}


export default class IconClass extends Component<IProps> {
  render() {
    const { name, className = '', onClick = () => {} } = this.props
    return (
      <span className={`icon iconfont icon-${name} ${className}`} onClick={(e) => onClick(e, 1)}></span>
    )
  }
}
