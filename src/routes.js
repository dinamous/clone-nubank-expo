import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

const AppStack = createStackNavigator()

import Main from './pages/Main'
import Amigos from './pages/Amigos'
import DividirValor from './pages/DividirValor'
import RecargaCelular from './pages/RecargaCelular'
import Cobrar from './pages/Cobrar'
import Doacao from './pages/Doacao'

export default function Routes() {
  return (
    <NavigationContainer>

      <AppStack.Navigator screenOptions={{ headerShown: false }}>
        <AppStack.Screen name="Home" component={ Main }/>
        <AppStack.Screen name="DividirValor" component={ DividirValor }/>
        <AppStack.Screen name="Amigos" component={ Amigos }/>
        <AppStack.Screen name="RecargaCelular" component={ RecargaCelular }/>
        <AppStack.Screen name="Cobrar" component={ Cobrar }/>
        <AppStack.Screen name="Doacao" component={ Doacao }/>
        
       
      </AppStack.Navigator>

    </NavigationContainer>
  )
}