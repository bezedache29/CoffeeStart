import { StatusBar } from 'expo-status-bar';
import { StoreProvider } from 'easy-peasy';
import AppRouter from './src/router/AppRouter';
import store from './src/store/store';
import { useEffect, useState } from 'react';
import LottieView from 'lottie-react-native';
import { useFonts } from 'expo-font';

export default function App() {

  const [lottie, setLottie] = useState(true)

  const [font] = useFonts({
    Cabin: require('./assets/fonts/Cabin-Bold.ttf'),
    Lobster: require('./assets/fonts/Lobster-Regular.ttf'),
    Pacifico: require('./assets/fonts/Pacifico-Regular.ttf'),
    IndieFlower: require('./assets/fonts/IndieFlower-Regular.ttf'),
    PottaOne: require('./assets/fonts/PottaOne-Regular.ttf'),
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setLottie(false)
    }, 5000)

    return () => {
      clearTimeout(timer)
    }
  }, [])

  if (lottie) {
    return <LottieView source={require('./assets/json/lottie.json')} autoPlay loop />
  }

  if (!font) {
    return <LottieView source={require('./assets/json/lottie.json')} autoPlay loop />
  }

  return (
    <StoreProvider store={store}>
      <AppRouter />
      <StatusBar style="auto" />
    </StoreProvider>
  );
}
