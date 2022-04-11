import React, { useState, useRef, useEffect } from 'react'
import { View, TextInput } from 'react-native'
import style from './src/static/style/index.js'
import Api from './src/api'
import { Icon } from './src/component/light'
import { Divider, LinearProgress, Button } from '@rneui/themed'
import Constants from 'expo-constants'

export default function App() {
  const [username, setUsername] = useState('admin')
  const [password, setPasswork] = useState('123456')
  const [visible, setVisible] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const usernameEl = useRef(null)

  GLOBAL.XMLHttpRequest = GLOBAL.originalXMLHttpRequest || GLOBAL.XMLHttpRequest

  const handleInput = (e) => {
    console.log(e)
    setUsername(e)
  }

  const handleLogin = () => {
    Api.light.getUserInfo().then((res) => {
      //console.log(res)
    })
    setIsLoading(true)
    Api.light.login({ username, password }).then((res) => {
      //console.log(res)
      setIsLoading(false)
    })
  }

  const handleVisilbe = () => {
    setVisible(!visible)
  }

  useEffect(() => {
    //usernameEl.current.focus()
    //console.log(666, usernameEl.current.isFocused())
  }, [])

  return (
    <View style={style.mLoginWrap}>
      <LinearProgress style={[style.mLoading, isLoading ? style.mLoadingActive : {}]} color="primary" />
      <View style={style.mLoginRow}>
        <TextInput
          style={style.mLoginInput}
          value={username}
          onChangeText={handleInput}
          placeholder="用户名"
          // autoFocus
          ref={usernameEl}
        ></TextInput>
      </View>
      <View style={style.mLoginRow}>
        <TextInput
          style={style.mLoginInput}
          value={password}
          onChangeText={setPasswork}
          placeholder="密码"
          secureTextEntry={!visible}
        ></TextInput>
        <Icon
          name={visible ? 'show' : 'close'}
          size={40}
          color="#333"
          onPress={handleVisilbe}
          style={style.mLoginPasswordIcon}
        ></Icon>
      </View>
      <View style={style.mLoginRow}>
        <Button onPress={handleLogin} type="solid" title="登录"></Button>
      </View>
      <Divider></Divider>
      
    </View>
  )
}
