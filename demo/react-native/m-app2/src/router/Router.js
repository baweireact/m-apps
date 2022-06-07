import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from '../views/light/login/Login'
import Index from '../views/light/index/Index'
import IndexForTab from '../views/light/test/tab1/IndexForTab'

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
          headerStyle: { backgroundColor: '#409eff' },
        }}
      />
      <Stack.Screen
        name="Index"
        component={Index}
        options={{
          title: '首页',
          headerTitleAlign: 'center',
          headerStyle: { backgroundColor: '#409eff' },
          headerShown: false,
        }}
      ></Stack.Screen>
      <Stack.Screen
        name="IndexForTab"
        component={IndexForTab}
        options={{
          title: '首页-tab',
          headerTitleAlign: 'center',
          headerStyle: { backgroundColor: '#409eff' },
        }}
      ></Stack.Screen>      
    </Stack.Navigator>
  )
}
