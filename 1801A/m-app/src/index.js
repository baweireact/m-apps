import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Home'
import "./mock"
import './font/iconfont.css'
import './index.css';
import './style.scss'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Home></Home>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
