import React from 'react'

const Icon = (props) => {
  let { type, className } = props
  return (
    <span className={`icon iconfont icon-${type} ${className ? className : ''}`} onClick={props.onClick}></span>
  )
}

export default Icon