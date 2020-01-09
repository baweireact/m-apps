import React, { useState, useEffect  } from 'react'
import Api from '../api'
import CommonHeader from '../components/CommonHeader'

const Detail = (props) => {
  //相当于this.state = {}
  let [ detail, setDetail ] = useState({})
  let id = props.match.params.id

  //相当于componentDidMount
  useEffect(() => {
    Api.getDetail(id).then(res => {
      if (res.code === 200) {
        //相当于setState
        setDetail(res.data)
      }
    })
  }, [])

  return (
    <div>
      <CommonHeader title={detail.title}></CommonHeader>
      <img src={detail.avatar}></img>
      <div>
        {detail.summary}
      </div>
    </div>
  )
}

export default Detail
