import React from 'react'
import ReactDOM from 'react-dom'
import Toast from './src/Toast'
import './index.css'

const test = () => {
  console.log(1)
}

test()

ReactDOM.render(<Toast></Toast>, document.getElementById('root')
)