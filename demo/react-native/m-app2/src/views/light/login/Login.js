import React, { useState, useRef, useEffect } from 'react'
import {
  SafeAreaView,
  ScrollView,
  View,
  TouchableWithoutFeedback,
  Text,
} from 'react-native'
import { WebView } from 'react-native-webview'
import style from './style.js'
import Api from '../../../api'
import { Icon } from '../../../component/light'
import { Divider, LinearProgress, Button, Input } from '@rneui/themed'

export default function Login(props) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [code, setCode] = useState('')
  const [visible, setVisible] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [captchaId, setCaptchaId] = useState('')
  const [captcha, setCaptcha] = useState('')
  const usernameEl = useRef(null)

  const { navigation } = props

  const handleInput = (e) => {
    console.log(e)
    setUsername(e)
  }

  const handleLogin = () => {
    setIsLoading(true)
    Api.h5
      .userAiLogin({ username, password, code, captchaId })
      .then((res) => {
        //console.log(res)
        setIsLoading(false)
        if (res.code === 200) {
          navigation.navigate('Index', {
            type: 'home',
          })
        }
      })
  }

  const handleNav = (path) => {
    navigation.navigate(path)
  }

  const handleVisilbe = () => {
    setVisible(!visible)
  }

  const getCaptcha = () => {
    console.log('captcha')
    Api.h5.userCaptcha({}).then((res) => {
      if (res.code === 200) {
        const { captchaId, captcha } = res.data
        let svg = captcha
        let height = svg.indexOf('height')
        let width = svg.indexOf('width')
        let step1 = svg.slice(0, height + 8)
        let step2 = svg.slice(height + 8 + 2)
        svg = `${step1}150${step2}`
        let step3 = svg.slice(0, width + 5)
        let step4 = svg.slice(width + 8 + 3)
        svg = `${step3}450${step4}`
        let html = `<div style="text-align:center;width:100%;overflow:hidden;">${svg}</div>`
        setCaptcha(html)
        setCaptchaId(captchaId)
      }
    })
  }

  useEffect(() => {
    getCaptcha()
  }, [])

  useEffect(() => {
    //usernameEl.current.focus()
    //console.log(666, usernameEl.current.isFocused())
  }, [])

  return (
    <View style={style.mLoginWrap}>
      <LinearProgress
        style={[style.mLoading, isLoading ? style.mLoadingActive : {}]}
        color="primary"
      />
      <View style={style.mLoginRow}>
        <Input
          label="邮箱/账号"
          style={style.mLoginInput}
          labelStyle={style.mLoginLabelStyle}
          value={username}
          onChangeText={handleInput}
          placeholder="用户名"
          // autoFocus
          ref={usernameEl}
        ></Input>
      </View>
      <View style={style.mLoginRow}>
        <Input
          label="密码"
          style={style.mLoginInput}
          labelStyle={style.mLoginLabelStyle}
          value={password}
          onChangeText={setPassword}
          placeholder="密码"
          secureTextEntry={!visible}
        ></Input>
        <Icon
          name={visible ? 'show' : 'close'}
          onPress={handleVisilbe}
          style={style.mLoginPasswordIcon}
        ></Icon>
      </View>
      <View style={style.mLoginRow}>
        <Input
          label="验证码"
          style={style.mLoginInput}
          labelStyle={style.mLoginLabelStyle}
          value={code}
          onChangeText={setCode}
          placeholder="验证码"
        ></Input>
      </View>
      <View style={style.mLoginCodeWrap}>
        <TouchableWithoutFeedback onPress={getCaptcha}>
          <WebView originWhitelist={['*']} source={{ html: captcha }}></WebView>
        </TouchableWithoutFeedback>
      </View>

      <View style={[style.mLoginBtnWrap]}>
        <Button onPress={handleLogin} type="solid" title="登录"></Button>
      </View>
      <Divider width={1}></Divider>
      <View style={style.mLoginBtnTestWrap}>
        <Button
          containerStyle={style.mLoginBtnTest}
          onPress={() => handleNav('IndexForTab')}
          title="Index For Tab1"
        ></Button>
      </View>
    </View>
  )
}
