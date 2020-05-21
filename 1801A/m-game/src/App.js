import React, { Component } from 'react'
import Header from './components/Header'
import Dice from './components/Dice'
import Money from './components/Money'
import Footer from './components/Footer'

export default class App extends Component {
  state = {
    score: 10000,
    guess: 0,  //0：小， 1： 大, 2:豹子
    diceArr: [],
    money: '下注金额'
  }

  async handleStart(guess) {
    if ( typeof this.state.money !== 'number') {
      alert('请先下注哦~')
      return
    }
    this.setState({
      guess
    })

    let arr = [];
    await new Promise((resolve) => {
      let count = 0
      let timer = setInterval(() => {
        arr = []
        for (let i = 0; i < 3; i++) {
          let num = Math.random() * 6 + 1;
          num = parseInt(num, 10);
          arr.push(num);
        }
        this.setState({
          diceArr: arr
        })
        count++
        if (count === 10) {
          clearInterval(timer)
          resolve(true)
        }
      }, 50)
    })
    this.computedMoney(guess, arr)
  }

  computedMoney(guess ,arr) {
    let result = arr.reduce((total, item) => {
      return total + item
    }, 0)
    let isWin = false

    if (result <= 10 && guess === 0) {
      isWin = true
    } else if (result >= 11 && guess === 1) {
      isWin = true
    }
    if (arr[0] === arr[1] && arr[1] === arr[2] && guess === 2) {
      isWin = true
    }

    if (isWin && guess !== 2) {
      this.setState({
        score: this.state.score + this.state.money
      })
    } else if (isWin && guess === 2) {
      this.setState({
        score: this.state.score + this.state.money * 3
      })
    } else {
      this.setState({
        score: this.state.score - this.state.money
      })
    }
  }

  handleAdd(money) {
    let baseMoney = this.state.money
    if (typeof this.state.money === 'string') {
      baseMoney = 0
    }
    this.setState({
      money: baseMoney + money
    })
  }

  handleClear() {
    this.setState({
      money: '下注金额'
    })
  }

  render() {
    return (
      <div className="m-wrap">
        <Header score={this.state.score}></Header>
        <Dice diceArr={this.state.diceArr}></Dice>
        <Money money={this.state.money} onAdd={(money) => this.handleAdd(money)} onClear={() => this.handleClear()}></Money>
        <Footer onStart={(guess) => this.handleStart(guess)}></Footer>
      </div>
    )
  }
}
