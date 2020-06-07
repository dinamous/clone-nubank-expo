import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

const AppStack = createStackNavigator()

import Main from './pages/Main'
import Amigos from './pages/Amigos'
// import Details from './pages/Detail'

export default function Routes() {
  return (
    <NavigationContainer>

      <AppStack.Navigator screenOptions={{ headerShown: false }}>
        <AppStack.Screen name="Home" component={ Main }/>
        <AppStack.Screen name="Amigos" component={ Amigos }/>
        {/* <AppStack.Screen name="Details" component={ Details }/> */}
      </AppStack.Navigator>

    </NavigationContainer>
  )
}