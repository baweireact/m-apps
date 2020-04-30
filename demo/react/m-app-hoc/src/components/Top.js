import React, { Component } from 'react'
import Input from './Input'
import Select from './Select'

export default class Top extends Component {
  constructor(props) {
    super(props)
    this.state = {
      item: {

      }
    }
  }
  handleName(e) {
    let { item } = this.state
    item.name = e.target.value
    this.setState({
      item
    })
  }

  handleGender(e) {
    let { item } = this.state
    item.gender = e.target.value
    this.setState({
      item
    })
  }

  handleAdd() {
    let { item } = this.state
    item.id = Date.now()
    this.props.onAdd(item)
  }
  render() {
    return (
      <div>
        <Input onChange={(e) => this.handleName(e)}></Input>
        <Select onChange={(e) => this.handleGender(e)}></Select>
        <button onClick={() => this.handleAdd()}>添加</button>
      </div>
    )
  }
}
