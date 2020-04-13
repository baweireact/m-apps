import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import Icon from './Icon'

class DetailHeader extends Component {

  handleBack() {
    this.props.history.go(-1)
  }

  render() {
    let { title } = this.props
    return (
      <div className="m-detail-header">
        <Icon name="flow" className="m-detail-header-icon" onClick={() => this.handleBack()}></Icon>
        <div className="m-detail-header-info">{title}</div>
        <Icon name="iconzhengli_fenxiang" className="m-detail-header-icon"></Icon>
        <Icon name="gengduo" className="m-detail-header-icon"></Icon>
      </div>
    )
  }
}

export default withRouter(DetailHeader)
