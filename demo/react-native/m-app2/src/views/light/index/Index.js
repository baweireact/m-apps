import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import style from './style'

export default function Index(props) {
  const [index, setIndex] = React.useState(0)
  const { navigation } = props

  const handleGoBackLogin = () => {
    navigation.navigate('Login')
  }

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
          <Text>footer</Text>
        </View>
      </View>
    </>
  )
}
