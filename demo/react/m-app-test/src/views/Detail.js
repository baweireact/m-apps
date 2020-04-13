import React, { Component } from 'react'
import Api from '../api'
import DetailHeader from '../components/DetailHeader'

export default class Detail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      detail: {}
    }
  }

  componentDidMount() {
    let { id } = this.props.match.params
    Api.detail(id).then(res => {
      if (res.code === 200) {
        this.setState({
          detail: res.data
        })
      }
    })
  }

  render() {
    let { detail } = this.state
    return (
      <div>
        <DetailHeader title={detail.title}></DetailHeader>
      </div>
    )
  }
}
