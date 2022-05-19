import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from '../views/light/login/Login'
import Index from '../views/light/index/Index'

const Stack = createNativeStackNavigator()

export default function Router() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Index" component={Index} options={{ title: '首页' }}></Stack.Screen>
    </Stack.Navigator>
  )
}
