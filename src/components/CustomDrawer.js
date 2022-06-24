import { View, Text, ImageBackground, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import { primary, secondary } from '../../assets/styles/global'
import { Ionicons } from '@expo/vector-icons';

export default function CustomDrawer(props) {
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView contentContainerStyle={{ backgroundColor: secondary }}>
        <View 
          style={{ padding: 20, backgroundColor: secondary }}
        >
          <Image source={require('../../assets/images/Coffee-circle.png')} style={{ height: 80, width: 80, borderRadius: 40, marginBottom: 10, marginLeft: 20 }} />
          <Text style={{ color: primary, fontSize: 18, fontFamily: 'PottaOne' }}>Coffee Start</Text>
          <Text style={{ color: primary, fontFamily: 'Cabin' }}>Bienvenue</Text>
        </View>
        <View style={{ flex: 1, backgroundColor: '#fff', paddingTop: 10 }}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <View style={{ padding: 20, borderTopWidth: 1, borderTopColor: '#ccc' }}>
        <TouchableOpacity onPress={() => console.log('clic')} style={{ paddingVertical: 15 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Ionicons name="share-social-outline" size={22} color={primary} />
            <Text style={{ fontSize: 15, fontFamily: 'Cabin', marginLeft: 5 }}>Partager a un ami</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log('clic')} style={{ paddingVertical: 15 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Ionicons name="exit-outline" size={22} color={'red'} />
            <Text style={{ fontSize: 15, fontFamily: 'Cabin', marginLeft: 5, color: 'red' }}>Se deconnecter</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}