import React from 'react'
import PropTypes from 'prop-types'

const Icon = (props) => {
  let { name, className } = props

  return (
    <span className={`icon iconfont icon-${name} ${className}`} onClick={props.onClick} ></span>
  )
}

Icon.propTypes = {
  name: PropTypes.string
}

export default Icon