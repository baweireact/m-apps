import React from 'react'
import Icon from './Icon'

const Stars = (props) => {
  let { count } = props

  let starsDom = []
  for (let i = 0; i < 5; i++) {
    starsDom.push(<Icon name="xingxing" key={i} className={"m-star-item " + (i < count ? 'active' : '') }></Icon>)
  }

  return (
    <div>
      {starsDom}
    </div>
  )
}

export default Stars
