import React from 'react'

interface IProps {
  name?: string,
  className?: string,
  onClick?: Function
}

const Icon = (props: IProps) => {
  let { name = 'zhanwei', className = '', onClick = () => {} } = props
  return (
    <span className={ `icon iconfont icon-${name} ${className}` } onClick={() => onClick() }></span>
  )
}

export default Icon
