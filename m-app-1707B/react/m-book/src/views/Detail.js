import React, { useState, useEffect } from 'react'
import Api from '../api'

const Detail = (props) => {
  let [detail, setDetail] = useState({})
  let [count, setCount] = useState(1)

  const handleBack = () => {
    props.history.go(-1)
  }

  const handleSub = () => {
    if (count > 1) {
      setCount(count - 1)
    }
  }

  const handleAdd = () => {
    setCount(count + 1)
  }

  const handleInput = (e) => {
    setCount(e.target.value.replace(/[^0-9]/g, '') * 1)
  }

  useEffect(() => {
    let { id } = props.match.params
    Api.getDetail(`?id=${id}`).then(res => {
      if (res.code === 200) {
        setDetail(res.data)
      }
    })
  }, [])
  return (
    <div className="m-main">
      <div>
        <button onClick={handleBack}>返回</button>
      </div>
      <img src={detail.avatar}></img>
      <div>
        <button onClick={handleSub} className="m-dialog-btn">-</button>
        <input placeholder="请输入" value={count} className="m-add-count" onChange={handleInput} type="text"></input>
        <button onClick={handleAdd} className="m-dialog-btn">+</button>
      </div>
      <div>{detail.summary}</div>
    </div>
  )
}

export default Detail
