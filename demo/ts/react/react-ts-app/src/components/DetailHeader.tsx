import React from 'react'
import { withRouter, RouteComponentProps } from 'react-router-dom'
import Icon from './Icon'

interface IProp extends RouteComponentProps {
  title: string
}

const DetailHeader = (props: IProp) => {
  let { title } = props

  const handleBack = () => {
    props.history.go(-1)
  }

  return (
    <div className="m-detail-header">
      <Icon name="back" className="m-detail-header-icon" onClick={() => handleBack()}></Icon>
      <div className="m-detail-header-info">{title}</div>
      <Icon name="fenxiang" className="m-detail-header-icon"></Icon>
      <Icon name="more" className="m-detail-header-icon"></Icon>
    </div>
  )
}

export default withRouter(DetailHeader)
