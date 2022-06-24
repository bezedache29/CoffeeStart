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

const {width: windowWidth} = Dimensions.get('window');

const logo = require('../../assets/images/Coffee-circle.png')

const carouselItems = [
  {
    title: "Aenean leo",
    body: "Ut tincidunt tincidunt erat. Sed cursus turpis vitae tortor. Quisque malesuada placerat nisl. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.",
    imgUrl: "https://picsum.photos/id/11/200/300",
  },
  {
    title: "In turpis",
    body: "Aenean ut eros et nisl sagittis vestibulum. Donec posuere vulputate arcu. Proin faucibus arcu quis ante. Curabitur at lacus ac velit ornare lobortis. ",
    imgUrl: "https://picsum.photos/id/10/200/300",
  },
  {
    title: "Lorem Ipsum",
    body: "Phasellus ullamcorper ipsum rutrum nunc. Nullam quis ante. Etiam ultricies nisi vel augue. Aenean tellus metus, bibendum sed, posuere ac, mattis non, nunc.",
    imgUrl: "https://picsum.photos/id/12/200/300",
  },
]

const renderScene = SceneMap({
  first: CoffeesList,
  second: Map,
});

const INITIAL_INDEX = 0;

export default function Main({ navigation }) {

  const carouselRef = React.useRef(null);
  const [currentIndex, setCurrentIndex] = React.useState(INITIAL_INDEX);

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

      { index !== 1 && (
        <View style={styles.footer}>
          <Text style={[subTitle, { paddingBottom: 0, paddingTop: 20 }]}>Nos petits coins de plaisir</Text>
          <Carousel
            style={styles.carousel}
            data={carouselItems}
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