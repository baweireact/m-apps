import React, { useEffect } from 'react'
import BScroll from 'better-scroll'

const Me = () => {

  useEffect(() => {
    const wrapper = document.querySelector('.wrapper')
    const scroll = new BScroll(wrapper, {
      scrollY: true,
      click: true,
      probeType: 3 // listening scroll hook
    })
  }, [])
  return (
    <div className="m-main">
      <div className="wrapper m-me-wrapper">
        <ul className="content">
          <li>...</li>
          <li>...</li>
          <li>...</li>
          <li>...</li>
          <li>...</li>
          <li>...</li>
          <li>...</li>
          <li>...</li>
          <li>...</li>
          <li>...</li>
          <li>...</li>
          <li>...</li>  
          <li>...</li>
          <li>...</li>
          <li>...</li>
          <li>...</li>
          <li>...</li>
          <li>...</li>
          <li>...</li>
          <li>...</li>
          <li>...</li>
          <li>...</li>
          <li>...</li>
          <li>...</li>    
          <li>...</li>
          <li>...</li>
          <li>...</li>
          <li>...</li>
          <li>...</li>
          <li>...</li>
          <li>...</li>
          <li>...</li>
          <li>...</li>
          <li>...</li>
          <li>...</li>
          <li>...</li>    
          <li>...</li>
          <li>...</li>
          <li>...</li>
          <li>...</li>
          <li>...</li>
          <li>...</li>
          <li>...</li>
          <li>...</li>
          <li>...</li>
          <li>...</li>
          <li>...</li>
          <li>...</li>            
        </ul>
      </div>
    </div>
  )
}

export default Me
