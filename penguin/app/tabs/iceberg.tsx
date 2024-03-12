import { StyleSheet, Animated, Alert, Button, SafeAreaView, ScrollView, Image } from 'react-native';

import { Text, View } from '@/components/Themed';

import { Link, router } from 'expo-router';

import IcebergNav from '@/app/tabs/iceberg_view/iceberg_nav'
import IcebergView from '@/app/tabs/iceberg_view/iceberg_view';

export default function TabTwoScreen() {
  return (
    <ScrollView 
      contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}
      horizontal={true}
      directionalLockEnabled={true}
      scrollEventThrottle={16}
      onScroll={event => 
      { 
        var currentOffset = event.nativeEvent.contentOffset.x;
        var direction = currentOffset > 0 ? 'left' : 'right';

        console.log(currentOffset, Math.abs(currentOffset));

        if (direction == 'right' && Math.abs(currentOffset) > 65) {
          router.replace('/tabs/home');
        }

      }}
    >

    <View style={styles.container}>

        <View style={styles.containerNav}>
          <IcebergNav></IcebergNav>
        </View>

        <Text>XYZ</Text>

        <View style={styles.container2}>
          <IcebergView></IcebergView>
        </View>     

    </View>

    {/*<Link href="/tabs/home" asChild><Button onPress={() => console.log("pressed")} title="Go to Home" /></Link>*/}
    {/*<Image style={styles.image1} source={require('@/assets/images/iceberg_fun.png')} />*/}

  </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    //backgroundColor: 'red',
    borderColor: 'orange',
    borderWidth: '3px',
  },
  container2: {
    //flex: 1,
    //alignItems: 'flex-start',
    backgroundColor: 'purple',
  },
  containerNav: {
    //flexGrow: 1,
    //flex: 0,
    //marginTop: 300,
    //alignItems: 'flex-start',
    backgroundColor: 'pink',
    borderColor: 'pink',
    borderWidth: '5px',

  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  image1: {
    width: 250,
    height: 200
  }
});
