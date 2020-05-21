import React, { Component } from 'react'

export default class Dice extends Component {
  render() {
    return (
      <div className="m-dice">
        {
          this.props.diceArr.map((item, index) => {
            return (
            <button key={index} className="m-dice-btn">{item}</button>
            )
          })
        }
      </div>
    )
  }
}
