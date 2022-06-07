import React from 'react'
import { View, TouchableOpacity } from 'react-native'
import { Tab, Text, TabView } from '@rneui/themed'
import { Icon } from '../../../component/light'
import style from '../../../static/style/index.js'

export default function Index(props) {
  const [index, setIndex] = React.useState(0)
  const { navigation } = props

  const handleGoBackLogin = () => {
    navigation.navigate('Login')
  }

  return (
    <>
      <View>
        <Text>Index</Text>
        <TouchableOpacity onPress={handleGoBackLogin}>
          <Text>返回登录页</Text>
        </TouchableOpacity>
      </View>
    </>
  )
}
