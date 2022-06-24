import { createDrawerNavigator } from '@react-navigation/drawer';
import Main from '../screens/Main.js';
import Profil from '../screens/profil/Profil.js';
import { NavigationContainer } from '@react-navigation/native';
import Orders from '../screens/orders/Orders.js';
import CustomDrawer from '../components/CustomDrawer.js';

import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { primary, secondary } from '../../assets/styles/global.js';

const Drawer = createDrawerNavigator();

export default function AppRouter() {
  return (
    <NavigationContainer>
      <Drawer.Navigator 
        initialRouteName='Accueil'
        drawerContent={props => <CustomDrawer {...props} />} 
        screenOptions={{
          drawerActiveBackgroundColor: primary,
          drawerActiveTintColor: secondary,
          drawerInactiveTintColor: primary,
          drawerLabelStyle: {
            marginLeft: -20,
            fontFamily: 'Cabin',
            fontSize: 15
          }
        }}
      >
        <Drawer.Screen name="Accueil" component={Main} options={{ 
          drawerIcon: ({ color }) => (
            <Ionicons name="home-outline" size={24} color={color} />
          )
         }} />
        <Drawer.Screen name="Mes commandes" component={Orders} options={{ 
          drawerIcon: ({ color }) => (
            <Feather name="command" size={24} color={color} />
          )
         }} />
        <Drawer.Screen name="Profile" component={Profil} options={{ 
          drawerIcon: ({ color }) => (
            <Ionicons name="person-outline" size={24} color={color} />
          )
         }} />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}