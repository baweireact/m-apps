import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from '../views/light/login/Login'
import Index from '../views/light/index/Index'
import { themme } from '../utils/tools'

const Stack = createNativeStackNavigator()

export default function Router() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          title: '登录',
          headerTitleAlign: 'center',
          headerStyle: themme,
        }}
      />
      <Stack.Screen
        name="Index"
        component={Index}
        options={{
          title: '首页',
          headerTitleAlign: 'center',
          headerStyle: themme,
        }}
      ></Stack.Screen>
    </Stack.Navigator>
  )
}
