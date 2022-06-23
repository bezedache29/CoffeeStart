import { View, StyleSheet, FlatList, Text } from 'react-native'
import React from 'react'
import CoffeeRender from './components/CoffeeRender';
import { primary, subTitle } from '../../../../assets/styles/global';

const list = [
  {
    id: 1,
    title: 'Caffe Latte',
    description: "L'intensité de notre espresso rencontre la douceur du lait chauffé à la vapeur, le tout recouvert d'une fine couche de mousse de lait.",
    advice: 4.2,
    totalAdvice: 1400,
    image: require('../../../../assets/images/coffees/Caffe_Latte.jpg'),
    nutrition: [
      {
        Energy: 102,
        fat: 0.3,
        fattyAcid: 0.0,
        carbohydrates: 15.3,
        sugars: 13.3,
        fibers: 0.0,
        proteins: 9.7,
        salt: 0.27,
        caffeine: 150
      }
    ]
  },
  {
    id: 2,
    title: 'Caramel Macchiato',
    description: "Prenez la première de nombreuses gorgées. Froid, rafraîchissant et délicieux. À déguster chaque fois que vous en avez envie",
    advice: 4.7,
    totalAdvice: 1700,
    image: require('../../../../assets/images/coffees/Caramel_Macchiato.jpg'),
    nutrition: [
      {
        Energy: 180,
        fat: 4.9,
        fattyAcid: 3.0,
        carbohydrates: 25.3,
        sugars: 22.9,
        fibers: 0.0,
        proteins: 8.2,
        salt: 0.25,
        caffeine: 150
      }
    ]
  },
  {
    id: 3,
    title: 'Cold Brew Latte',
    description: "Notre café Cold Brew mélangé avec du lait.",
    advice: 3.9,
    totalAdvice: 1800,
    image: require('../../../../assets/images/coffees/Cold_Brew_Latte.jpg'),
    nutrition: [
      {
        Energy: 108,
        fat: 6.0,
        fattyAcid: 3.8,
        carbohydrates: 7.9,
        sugars: 7.9,
        fibers: 0.0,
        proteins: 5.5,
        salt: 0.18,
        caffeine: 139
      }
    ]
  },
  {
    id: 4,
    title: 'Iced Cappuccino',
    description: "Café dans lequel on ajoute une mousse de lait délicate, ce qui donne une harmonie parfaite entre la douceur du lait et le goût de café",
    advice: 4.5,
    totalAdvice: 700,
    image: require('../../../../assets/images/coffees/Iced_Cappuccino.jpg'),
    nutrition: [
      {
        Energy: 57,
        fat: 0.1,
        fattyAcid: 0.0,
        carbohydrates: 10.9,
        sugars: 8.9,
        fibers: 0.0,
        proteins: 3.3,
        salt: 0.10,
        caffeine: 150
      }
    ]
  },
  {
    id: 5,
    title: 'Latte Macchiato',
    description: "Le latte macchiato qui signifie lait taché en italien, est une sorte d’alternative au cappuccino. Il est composé de lait entier chaud, d’une mousse onctueuse et de café. Le résultat est magique, des couches superposées donnant lieu à un dégradé de couleur qui appelle à la gourmandise.",
    advice: 3.9,
    totalAdvice: 580,
    image: require('../../../../assets/images/coffees/Latte_Macchiato.jpg'),
    nutrition: [
      {
        Energy: 79,
        fat: 0.2,
        fattyAcid: 0.0,
        carbohydrates: 11.9,
        sugars: 10.0,
        fibers: 0.0,
        proteins: 7.5,
        salt: 0.20,
        caffeine: 150
      }
    ]
  },
  
]

export default function CoffeesList() {

  const renderItem = ({ item, index }) => {
    return <CoffeeRender coffee={item} />
  }

  return (
    <View style={styles.container}>
      <FlatList
        ListHeaderComponent={
          <Text style={subTitle}>Les plus grands succès de CoffeeStart</Text>
        }
        contentContainerStyle={{ flexGrow: 1 }}
        data={list}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
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