import React, { Component } from 'react'

export default class Dice extends Component {
  render() {
    return (
      <div className="m-dice">
        {
          this.props.diceArr.map((item, index) => {
            return (
              <div key={index} className="m-dice-item">{item}</div>
            )
          }) 
        }
      </div>
    )
  }
}
