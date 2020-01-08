import React, { useState, useEffect } from 'react'
import Api from '../api'
import CommonHeader from '../components/CommonHeader'

const Detail = (props) => {
  let [ detail, setDetail ] = useState({})
  let [ id, setId ] = useState(props.match.params.id)

  const handleUpdateId = () => {
    setId(id === '7404' ? '1009' : '7404')
  }

  
  useEffect(() => {
    Api.getDetail(`/${id}`).then(res => {
      if (res.code === 200) {
        setDetail(res.data)
      }
    })
  }, [id])

  return (
    <div className="m-wrap">
      <CommonHeader title={detail.title}></CommonHeader>
      <div className="m-detail">
        <img src={detail.avatar} alt={detail.title} width='225' height='300'></img>
        <div>
          <button onClick={handleUpdateId}>测试</button>
        </div>
      </div>
    </div>
  )
}

export default Detail