import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import CoffeeDetails from './../screens/coffee/CoffeeDetails';
import DrawerNavigator from './DrawerNavigator';

const Stack = createNativeStackNavigator()

export default function StackNavigator() {
  return (
    <Stack.Navigator headerMode="None" mode="modal" screenOptions={{headerShown: false}}>
      <Stack.Screen name="drawer" component={DrawerNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="coffee-details" component={CoffeeDetails} options={{ title: 'Détail du Coffee' }} />
    </Stack.Navigator>
  )
}