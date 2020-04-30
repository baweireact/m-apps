import React from 'react'
import Icon from './Icon'

interface IProps {
  count: number
}

const Stars = (props: IProps) => {
  let { count } = props

  const starsDom = []
  for (let i = 0; i < 5; i++) {
    starsDom.push(<Icon name="star" key={i} className={`m-star ${ i < count ? 'active' : '' }`}></Icon>)
  }

  return (
    <div>
      {starsDom}
    </div>
  )
}

export default Stars
