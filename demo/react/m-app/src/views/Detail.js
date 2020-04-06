import React, { useState, useEffect } from 'react'
import Api from '../api'

const Detail = (props) => {
  const [ detail, setDetail ] = useState({count: 1})

  useEffect(() => {
    let { id } = props.match.params
    Api.detail(id).then(res => {
      if (res.code === 200) {
        setDetail(res.data)
      }
    })
  }, [])
  return (
    <div>
      <div className="m-detail-img-wrap">
        <img src={detail.avatar}></img>
      </div>
    </div>
  )
}

export default Detail
