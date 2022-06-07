import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import Router from './src/router/Router'

export default function App() {
  //https://blog.csdn.net/xutongbao/article/details/124010559?spm=1001.2014.3001.5501
  //react native调试在谷歌浏览器中查看network信息
  //GLOBAL.XMLHttpRequest = GLOBAL.originalXMLHttpRequest || GLOBAL.XMLHttpRequest
  return (
    <>
      <NavigationContainer>
        <Router></Router>
      </NavigationContainer>
    </>
  )
}
