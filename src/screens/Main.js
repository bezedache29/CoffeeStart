import * as React from 'react';
import { View, useWindowDimensions, SafeAreaView, StyleSheet, TouchableOpacity, Animated, Image, Text, Dimensions, ImageBackground } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import CoffeesList from './home/coffees/CoffeesList';
import Map from './home/map/Map';
import Constants from 'expo-constants';
import { primary, secondary, subTitle } from '../../assets/styles/global';
// import Carousel from 'react-native-snap-carousel';
import Carousel from 'react-native-anchor-carousel';
import Companies from './home/companies/Companies';
import useFirestore from '../hooks/useFirestore';

const {width: windowWidth} = Dimensions.get('window');

const logo = require('../../assets/images/Coffee-circle.png')

const renderScene = SceneMap({
  first: CoffeesList,
  second: Map,
});

const INITIAL_INDEX = 0;

export default function Main() {

  const carouselRef = React.useRef(null);
  const [currentIndex, setCurrentIndex] = React.useState(INITIAL_INDEX);
  const [companies, setCompanies] = React.useState([])

  const { searchCollection } = useFirestore()

  React.useEffect(() => {
    searchCompanies()
  }, [])

  const searchCompanies = async () => {
    const companies = await searchCollection('companies')
    setCompanies(companies)
  }

  function handleCarouselScrollEnd(item, index) {
    setCurrentIndex(index);
  }

  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'TOP COFFEE' },
    { key: 'second', title: 'CARTE COFFEE' },
  ]);

  const handleIndexChange = (index) => setIndex(index);

  const renderTabBar = (props) => {
    const inputRange = props.navigationState.routes.map((x, i) => i);

    return (
      <View style={styles.tabBar}>
        {props.navigationState.routes.map((route, i) => {
          const opacity = props.position.interpolate({
            inputRange,
            outputRange: inputRange.map((inputIndex) =>
              inputIndex === i ? 1 : 0.5
            ),
          });

          return (
            <TouchableOpacity
              key={i}
              style={styles.tabItem}
              onPress={() => setIndex(i)}>
              <Animated.Text style={[{ opacity }, styles.textTab]}>{route.title}</Animated.Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };

  const renderItemCarousel = ({ item, index }) => {
    return <Companies item={item} index={index} />
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white'
    },
    header: {
      flex: 1,
      flexDirection: 'row',
      width: '100%',
      marginTop: 15
    },
    tabs: {
      flex: index !== 1 ? 3 : 5
    },
    footer: {
      flex: 2
    },
    tabBar: {
      flexDirection: 'row',
      paddingTop: Constants.statusBarHeight,
    },
    tabItem: {
      flex: 1,
      alignItems: 'center',
      padding: 16,
      backgroundColor: '#1f3629',
    },
    textTab: {
      color: 'white'
    },
    imageContainer: {
      flex: 1,
      width: '40%',
    },
    logo: {
      flex: 1,
      width: null,
      height: null,
      resizeMode: 'contain',
    },
    titleContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      width: '60%',
    },
    title: {
      fontSize: 28,
      lineHeight: 55,
      textDecorationLine: 'underline',
      color: primary,
      fontFamily: 'PottaOne',
    },
    carousel: {
      marginVertical: 10
    },
  })

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.imageContainer}>
          <Image 
            style={styles.logo}
            source={logo}
          />
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Votre café à porté de main</Text>
        </View>
      </View>
      <View style={styles.tabs}>
        <TabView
          navigationState={{ index, routes }}
          renderScene={renderScene}
          renderTabBar={renderTabBar}
          onIndexChange={handleIndexChange}
          initialLayout={{ width: layout.width }}
          swipeEnabled={false}
        />
      </View>

      { index !== 1 && companies && companies.length > 0 && (
        <View style={styles.footer}>
          <Text style={[subTitle, { paddingBottom: 0, paddingTop: 20 }]}>Nos petits coins de plaisir</Text>
          <Carousel
            style={styles.carousel}
            data={companies}
            renderItem={renderItemCarousel}
            itemWidth={0.7 * windowWidth}
            inActiveOpacity={0.3}
            containerWidth={windowWidth}
            onScrollEnd={handleCarouselScrollEnd}
            ref={carouselRef}
          />
        </View>
      )}
      
     
    </SafeAreaView>
   
  );
}