import React from 'react'

const Badge = (props) => {
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
