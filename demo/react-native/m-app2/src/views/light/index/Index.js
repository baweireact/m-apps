import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity, TouchableWithoutFeedback } from 'react-native'
import { Icon } from '../../../component/light'
import style from './style'

export default function Index(props) {
  const { type } = props.route.params
  const [navType, setNavType] = useState(type)
  const { navigation } = props

  const handleGoBackLogin = () => {
    navigation.navigate('Login')
  }

  const handleNav = (navType) => {
    console.log(666, navType)
    setNavType(navType)
  }

  useEffect(() => {
    const { type } = props.route.params
    console.log(666, type)
  }, [])

  return (
    <>
      <View style={style.mIndexWrap}>
        <View style={style.mIndexHeader}>
          <Text style={style.mIndexHeaderText}>小米书城</Text>
        </View>
        <View style={style.mIndexMain}>
          <Text>main</Text>
          <TouchableOpacity onPress={handleGoBackLogin}>
            <Text>返回登录页</Text>
          </TouchableOpacity>
        </View>
        <View style={style.mIndexFooter}>
          <TouchableWithoutFeedback onPress={() => handleNav('home')} style={style.mIndexFooterItem}>
            <View style={style.mIndexFooterItem}>
              <View style={style.mIndexFooterItemIconWrap}>
                <Icon
                  name={'home'}
                  style={[
                    style.mIndexFooterItemIcon,
                    navType === 'home' ? style.mIndexFooterItemIconActive : '',
                  ]}
                ></Icon>
              </View>
              <View style={style.mIndexFooterItemTextWrap}>
                <Text
                  style={[
                    style.mIndexFooterItemText,
                    navType === 'home' ? style.mIndexFooterItemTextActive : '',
                  ]}
                >
                  首页
                </Text>
              </View>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={() => handleNav('cart')} style={style.mIndexFooterItem}>
            <View style={style.mIndexFooterItem}>
              <View style={style.mIndexFooterItemIconWrap}>
                <Icon
                  name={'car'}
                  style={[
                    style.mIndexFooterItemIcon,
                    navType === 'cart' ? style.mIndexFooterItemIconActive : '',
                  ]}
                ></Icon>
              </View>
              <View style={style.mIndexFooterItemTextWrap}>
                <Text
                  style={[
                    style.mIndexFooterItemText,
                    navType === 'cart' ? style.mIndexFooterItemTextActive : '',
                  ]}
                >
                  购物车
                </Text>
              </View>
            </View>
          </TouchableWithoutFeedback>     
          <TouchableWithoutFeedback onPress={() => handleNav('me')} style={style.mIndexFooterItem}>
            <View style={style.mIndexFooterItem}>
              <View style={style.mIndexFooterItemIconWrap}>
                <Icon
                  name={'username'}
                  style={[
                    style.mIndexFooterItemIcon,
                    navType === 'me' ? style.mIndexFooterItemIconActive : '',
                  ]}
                ></Icon>
              </View>
              <View style={style.mIndexFooterItemTextWrap}>
                <Text
                  style={[
                    style.mIndexFooterItemText,
                    navType === 'me' ? style.mIndexFooterItemTextActive : '',
                  ]}
                >
                  我的
                </Text>
              </View>
            </View>
          </TouchableWithoutFeedback>                
        </View>
      </View>
    </>
  )
}
