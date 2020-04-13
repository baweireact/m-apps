import React from 'react'
import { Carousel } from 'antd'

const Me = () => {

  const onChange = (a, b, c) => {
    console.log(a, b, c);
  }
  return (
    <div className="m-main">
      <Carousel afterChange={onChange}>
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
      </Carousel>
    </div>
  )
}

export default Me
