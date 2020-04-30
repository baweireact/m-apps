import React, { MouseEvent } from 'react'

interface IProps {
  name: string,
  className?: string,
  onClick?: (e: MouseEvent, count: number) => void
}

const Icon = (props: IProps) => {
  let { name, className = '', onClick = () => {} } = props
  return (
    <span className={`icon iconfont icon-${name} ${className}`} onClick={(e) => onClick(e, 1)}></span>
  )
}

export default Icon
