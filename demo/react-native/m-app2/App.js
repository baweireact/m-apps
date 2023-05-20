import React from 'react'
import { Provider } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native'
import Router from './src/router/Router'
import store from './src/store'

export default function App() {
  //https://blog.csdn.net/xutongbao/article/details/124010559?spm=1001.2014.3001.5501
  //react native调试在谷歌浏览器中查看network信息
  GLOBAL.XMLHttpRequest = GLOBAL.originalXMLHttpRequest || GLOBAL.XMLHttpRequest
  return (
    <>
      <Provider store={store}>
        <NavigationContainer>
          <Router></Router>
        </NavigationContainer>
      </Provider>
    </>
  )
}
