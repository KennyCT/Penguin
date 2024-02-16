import { StyleSheet, Animated, Alert, Button, SafeAreaView, ScrollView, Image } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';

import { Link, router } from 'expo-router';

var AnimatedScrollView = Animated.createAnimatedComponent(ScrollView);

export default function AppLogin() {
  return (

      <View style={styles.container}>

        <Text style={styles.title}>Login Screen.</Text>

      </View>
    
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100%',
    //backgroundColor: 'red',
  },
  scrollcontainer: {
    flex: 1
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  /*
  scrollView: {
    backgroundColor: 'pink',
    marginHorizontal: 20,
  },*/
  text: {
    fontSize: 42,
  },
  image1: {
    width: 250,
    height: 200
  }
});
