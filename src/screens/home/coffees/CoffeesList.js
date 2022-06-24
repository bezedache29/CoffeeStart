import { View, StyleSheet, FlatList, Text, Pressable } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import CoffeeRender from './components/CoffeeRender';
import { subTitle } from '../../../../assets/styles/global'
import useFirestore from '../../../hooks/useFirestore';
import { ActivityIndicator } from 'react-native-web';
import { useNavigation } from '@react-navigation/native';

export default function CoffeesList() {

  const navigation = useNavigation()

  const [coffees, setCoffees] = useState([])
  const [refreshing, setRefreshing] = useState(false)

  const { searchCollection } = useFirestore()

  useEffect(() => {
    searchCoffees()
  }, [])

  const searchCoffees = async () => {
    const coffeesOnDB = await searchCollection('coffees')
    setCoffees(coffeesOnDB)
  }

  const renderItem = ({ item }) => {
    return (
      <Pressable onPress={() => goToCoffeeDetails(item)}>
        <CoffeeRender coffee={item} />
      </Pressable>
    )
  }

  const goToCoffeeDetails = (item) => {
    navigation.navigate('coffee-details', {coffee: item})
  }

  const onRefresh = useCallback(() => {
    setRefreshing(true)
    setTimeout(() => {
      searchCoffees('coffees')
      setRefreshing(false)
    }, 2000)
  })

  if (!coffees) {
    return <ActivityIndicator />
  }

  return (
    <View style={styles.container}>
      <FlatList
        ListHeaderComponent={
          <Text style={subTitle}>Les plus grands succès de CoffeeStart</Text>
        }
        contentContainerStyle={{ flexGrow: 1 }}
        data={coffees}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
        refreshing={refreshing}
        onRefresh={onRefresh}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#E0BBE4'
  },
})