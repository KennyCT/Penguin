import { StyleSheet, Animated, Alert, Button, SafeAreaView, ScrollView, Image, Pressable } from 'react-native';

import { Text, View } from '@/components/Themed';

import { Link, router } from 'expo-router';

import Ionicon from 'react-native-vector-icons/Ionicons';

export default function IcebergNav() {
  return (
    
  <View style={styles.navBar}>

    <View style={styles.leftContainer}>
      <Link href="/tabs/home" asChild>
        <Pressable style={styles.browse_igloos_button} onPress={() => console.log("browse igloos pressed")}>
          <Ionicon name="chevron-back" size={30} color="#007AFF"/>
          <Text style={styles.navbarText}>Back</Text>  
        </Pressable>  
      </Link>
    </View>

    <View style={styles.rightContainer}>
      <Pressable style={styles.search_button} onPress={() => console.log("search pressed")}>
        <Text style={styles.navbarText}>Search...</Text> 
      </Pressable>    
    </View>

  </View>
    
  
  );
}

const styles = StyleSheet.create({
  navbarText: {
    color: '#007AFF',
    fontSize: 17,
    verticalAlign: 'top'
  },
  browse_igloos_button: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    //backgroundColor: 'blue',
  },
  search_button: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  navBar: {
    height: 100,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    //backgroundColor: 'blue',
    //position: 'absolute',
    //top: 0,
    width: '100%',
    //marginTop: 60,
    paddingTop: 40,
    flex: 0,
  },
  leftContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    //marginLeft: 10,
    //backgroundColor: 'pink'
  },
  rightContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginRight: 10,
    //backgroundColor: 'red',
  },
});
