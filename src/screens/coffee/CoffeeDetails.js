import { View, Text } from 'react-native'
import React from 'react'

export default function CoffeeDetails({ navigation, route }) {

  const { coffee } = route.params

  return (
    <View style={{ marginTop: 80 }}>
      <Text>{coffee.title}</Text>
    </View>
  )
}