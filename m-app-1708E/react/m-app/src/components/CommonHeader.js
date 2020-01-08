import React from 'react'
import { withRouter } from 'react-router-dom'
import Icon from './Icon'

const CommonHeader = (props) => {
  const handleGoBack = (e) => {
    props.history.go(-1)
  }

  let { title } = props
  return (
    <div className="m-common-header">
      <Icon type="flow" className="m-common-header-icon" onClick={(e) => handleGoBack(e)}></Icon>
      <div className="m-common-header-title">
        {title}
      </div>
      <Icon type="iconzhengli_fenxiang" className="m-common-header-icon"></Icon>
      <Icon type="gengduo" className="m-common-header-icon"></Icon>
    </div>
  )
}

export default withRouter(CommonHeader) 
