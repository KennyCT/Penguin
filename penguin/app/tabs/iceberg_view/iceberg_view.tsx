import { StyleSheet, Animated, Alert, Button, SafeAreaView, ScrollView, Image, Pressable } from 'react-native';

import { Text, View } from '@/components/Themed';

import React, { useState } from 'react';

import Ionicon from 'react-native-vector-icons/Ionicons';

var myTest = true;

export default function IcebergView() {
  return (
    
    <View style={styles.container}>
      
      { /*Title*/ }
      <View style={styles.iceberg_title}>
       <Text style={{fontSize: 28, fontWeight: 'bold'}}>RPI Iceberg</Text>
      </View>

      <View style={styles.tags}>
        {/*<Text onPress={() => toggleButton("clubs") } style={[styles.tag, { opacity: isFocused("clubs") ? 1 : 0.5 }]}>clubs</Text>*/}
        <Text onPress={() => testABC(myTest) } style={testABC(myTest)}>clubs</Text>
        <Text style={[styles.tag, { opacity: focused_clubs ? 1 : 0.5 }]}>orgs</Text>
        <Text style={[styles.tag, { opacity: focused_clubs ? 1 : 0.5 }]}>frats</Text>
        <Text style={[styles.tag, { opacity: focused_clubs ? 1 : 0.5 }]}>other</Text>
      </View>


  </View>
    
  
  );
}

testABC = function(options) {
  console.log(options);
  if (myTest == true) {
    myTest = false;
    return {
      opacity: 0.5,
    }
  } else {
    myTest = true;
    return {
      opacity: 1.0
    }
  }
  
}

var focused_clubs = true;

const styles = StyleSheet.create({
  tags: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    padding: 10,

    //backgroundColor: 'red',
    
  },
  tag: {
    borderColor: 'green',
    borderWidth: 1,
    marginHorizontal: 5,
    borderRadius: 10,
    padding: 5,
  },
  iceberg_title: {
    //flexDirection: 'row',
    //justifyContent: 'space-between',
    //alignItems: 'center',
    //backgroundColor: 'red',
    //flex: 0,
    width: '100%',
    //position: 'absolute',
    //top: 0,
    //marginTop: 200,
    paddingLeft: 0,
  },
  container: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    //backgroundColor: 'blue',
    //flexDirection: 'column'
  }
});
