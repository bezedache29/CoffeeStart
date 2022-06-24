import { NavigationContainer } from '@react-navigation/native'
import DrawerNavigator from './DrawerNavigator'
import StackNavigator from './StackNavigator'

export default function AppRouter() {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  )
}