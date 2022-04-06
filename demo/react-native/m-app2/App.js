import React, { useState, useRef, useEffect } from 'react'
import { View, TextInput, Text, Button } from 'react-native'
import style from "./src/static/style/index.js"
import Api from './src/api'
import { Icon } from './src/component/light'

export default function App() {
  const [username, setUsername] = useState('admin')
  const [password, setPasswork] = useState('123456')
  const usernameEl = useRef(null)

  const handleInput = (e) => {
    console.log(e)
    setUsername(e)
  }

  const handleLogin = () => {
    console.log(777, username, password)
    Api.light.getUserInfo().then(res => {
      console.log(res)
    })
    Api.light.login({username, password}).then(res => {
      console.log(res)
    })
  }

  useEffect(() => {
    //usernameEl.current.focus()
    //console.log(666, usernameEl.current.isFocused())
  }, [])

  return (
    <View style={style.mLoginWrap}>
      <View style={style.mLoginRow}>
        <TextInput
          style={style.mLoginInput}
          value={username}
          onChangeText={handleInput}
          // autoFocus
          ref={usernameEl}
        ></TextInput>
      </View>
      <View style={style.mLoginRow}>
        <TextInput
          style={style.mLoginInput}
          value={password}
          onChangeText={setPasswork}
          secureTextEntry={true}
        ></TextInput>
      </View>
      <View style={style.mLoginRow}>
        <Button onPress={handleLogin} title="登录"></Button>
      </View>
      <Icon name="666777"></Icon>
    </View>
  )
}
