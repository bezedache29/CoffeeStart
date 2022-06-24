import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { primary, textColor } from '../../../../../assets/styles/global'
import { AntDesign } from '@expo/vector-icons'; 

export default function CoffeeRender({ coffee }) {

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image 
          style={styles.image}
          source={{ uri: coffee.image }}
        />
      </View>
      <View style={styles.textsContainer}>
        <Text style={styles.title}>{coffee.title}</Text>
        <View style={styles.adviceContainer}>
          <AntDesign name="star" size={18} color={primary} />
          <View style={styles.textsAdvice}>
            <Text>
              <Text style={styles.advice}>{coffee.advice}</Text>
              <Text> / {coffee.totalAdvice} avis</Text>
            </Text>

          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    borderColor: primary,
    borderWidth: 1,
    paddingVertical: 20,
    paddingHorizontal: 5,
    marginVertical: 5,
    marginHorizontal: 5,
    borderRadius: 5,
    flexDirection: 'row'
  },
  imageContainer: {
    width: '25%',
    height: '100%'
  },
  image: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'contain',
    transform: [{ scale: 1.7 }]
  },
  textsContainer: {
    marginLeft: 25
  },
  title: {
    color: textColor,
    fontSize: 20,
    fontFamily: 'Cabin'
  },
  adviceContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  textsAdvice: {
    marginLeft: 10
  },
  advice: {
    fontWeight: 'bold'
  }
})