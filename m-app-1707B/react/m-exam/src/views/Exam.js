import React, { Component } from 'react'
import QuestionPicker from '../components/QuestionPicker'
import Result from '../components/Result'

export default class Exam extends Component {
  render() {
    let { type } = this.props.match.params
    return (
      <div>
        <Result></Result>
        <QuestionPicker type={type}></QuestionPicker>
      </div>
    )
  }
}
