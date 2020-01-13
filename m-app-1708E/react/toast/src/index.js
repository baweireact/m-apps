import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import Router from './router/Router'
import './index.css'

ReactDOM.render(
  <BrowserRouter>
    <Router></Router>
  </BrowserRouter>
  , document.getElementById('root'))