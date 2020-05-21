import React, { Component } from 'react'
import Header from './components/Header'
import Dice from './components/Dice'
import Money from './components/Money'
import Footer from './components/Footer'

export default class App extends Component {
  state = {
    score: 10000,
    money: 0,
    guess: 0,  //0:小， 1：大， 2:豹子
    diceArr: []
  }

  //累加金额
  handleAdd(money) {
    this.setState({
      money: this.state.money + money
    })
  }

  //清空金额
  handleClear() {
    this.setState({
      money: 0
    })
  }

  //开始投掷骰子
  async handleStart(guess) {
    console.log('开始:' + guess)

    let arr = []
    await new Promise((resolve) => {
      let count = 0
      let timer = setInterval(() => {
        arr = []
        for (let i = 0; i < 3; i++) {
          arr.push(Math.floor(Math.random() * 6 + 1))
        }
        this.setState({
          diceArr: arr
        })
        count++
        if (count === 20) {
          clearInterval(timer)
          resolve(true)
        }
      }, 50)
    })

    //求和，也可以用for循环
    let sum = arr.reduce((total, item) => { 
      return total + item 
    }, 0)

    console.log(sum)
    let isWin = false
    //赌小，赢了
    if (sum <= 9 && guess === 0) {
      isWin = true
    } else if (sum >= 10 && guess === 1) { //赌大，赢了
      isWin = true
    }

    //赌豹子赢了
    if (arr[0] === arr[1] && arr[1] === arr[2] && guess === 2) {
      isWin = true
    }
    console.log(isWin)

    //赢了
    if (isWin) {
      if (guess !== 2) {
        this.setState({
          score: this.state.score + this.state.money
        })
      } else {
        this.setState({
          score: this.state.score + this.state.money * 24
        })
      }

    } else {  //输了
      this.setState({
        score: this.state.score - this.state.money
      })
    }
  }

  render() {
    return (
      <div className="m-wrap">
        <Header score={this.state.score}></Header>
        <Dice diceArr={this.state.diceArr}></Dice>
        <Money 
          money={this.state.money} 
          onAdd={(money) => this.handleAdd(money)}
          onClear={() => this.handleClear()}></Money>
        <Footer onStart={(guess) => this.handleStart(guess)}></Footer>
      </div>
    )
  }
}
