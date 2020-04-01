import React from 'react'

const Icon = (props) => {
  let { name, className } = props

  return (
    <span className={`icon iconfont icon-${name} ${className}`} onClick={props.onClick} ></span>
  )
}

export default Icon