import React from 'react'
import { withRouter } from 'react-router-dom'
import Icon from './Icon'

const CommonHeader = (props) => {
  let{ title } = props
  const handleGoBack = () => {
    props.history.go(-1)
  }
  return (
    <div className="m-common-header">
      <Icon type="flow" className="m-common-header-icon" onClick={() => handleGoBack()}></Icon>
      <div className="m-common-header-title">{title}</div>
    </div>
  )
}

export default withRouter(CommonHeader)