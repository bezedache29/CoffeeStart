import { createDrawerNavigator } from '@react-navigation/drawer';
import Main from '../screens/Main.js';
import Profil from '../screens/profil/Profil.js';
import { NavigationContainer } from '@react-navigation/native';
import Orders from '../screens/orders/Orders.js';

const Drawer = createDrawerNavigator();

export default function AppRouter() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName='Accueil'>
        <Drawer.Screen name="Accueil" component={Main} />
        <Drawer.Screen name="Mes commandes" component={Orders} />
        <Drawer.Screen name="Profile" component={Profil} />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}