import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

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
