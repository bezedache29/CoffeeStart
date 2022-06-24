import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native'
import React from 'react'

export default function Companies({ item, index }) {

  const { imgUrl, name, address, city, zipCode } = item;

  return (
    <TouchableOpacity
      key={index}
      activeOpacity={1}
      style={styles.item}
      onPress={() => {
        console.log('Go to Coffee ' + index);
      }}>
      <ImageBackground source={{uri: imgUrl}} style={styles.imageBackground} imageStyle={styles.imageStyleBackground}>
        <View style={styles.textContainer}>
          <Text style={styles.titleText}>{name}</Text>
          <Text style={styles.contentText}>{address}</Text>
          <Text style={styles.city}>{zipCode} {city}</Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  item: {
    borderWidth: 2,
    backgroundColor: 'white',
    flex: 1,
    borderRadius: 5,
    borderColor: 'white',
    elevation: 3,
  },
  imageBackground: {
    flex: 2,
    backgroundColor: '#EBEBEB',
    borderWidth: 5,
    borderColor: 'white',
  },
  imageStyleBackground: {
    borderRadius: 6,
    opacity: 0.6
  },
  textContainer: {
    padding: 10,
    marginTop: 'auto',
    backgroundColor: 'rgba(242, 242, 242, 0.40)'
  },
  titleText: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  contentText: {
    marginTop: 10,
    fontSize: 12,
  },
  city: {
    fontSize: 15,
    fontWeight: 'bold',
  }
})