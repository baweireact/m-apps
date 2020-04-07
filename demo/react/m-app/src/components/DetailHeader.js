import React from 'react'
import Icon from './Icon'

const DetailHeader = (props) => {
  let { title } = props
  return (
    <div>
      <Icon name="flow"></Icon>
      <div>{title}</div>
    </div>
  )
}

export default DetailHeader
