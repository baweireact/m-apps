import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import Router from './src/router/Router'

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Router></Router>
      </NavigationContainer>
    </>
  )
}
