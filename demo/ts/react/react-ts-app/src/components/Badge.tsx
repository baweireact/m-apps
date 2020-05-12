import React, { ReactElement } from 'react'

interface IProp {
  count: number | string,
  children: ReactElement
}

const Badge = (props: IProp) => {
  let { count, children } = props
  if (count > 99) {
    count = '99+'
  }
  return (
    <span className="m-badge-wrap">
      { (typeof count === 'string' || count > 0) && <span className="m-badge">{count}</span>}
      {children}
    </span>
  )
}


export default Badge
