import React, { Component } from 'react'
import Top from '../components/Top'
import Bottom from '../components/Bottom'

export default class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      list: [{
        id: 0,
        name: 'xu',
        gender: '男'
      }]
    }
  }
  handleAdd(item) {
    let { list } = this.state
    list.push(item)
    this.setState({
      list
    })
  }
  render() {
    let { list } = this.state
    return (
      <div>
        <Top onAdd={(item) => this.handleAdd(item)}></Top>
        <Bottom list={list}></Bottom>
      </div>
    )
  }
}
