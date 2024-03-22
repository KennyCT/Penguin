import { StyleSheet, Animated, Alert, Button, SafeAreaView, ScrollView, Image, Pressable, TouchableOpacity, TouchableWithoutFeedback, FlatList, ActivityIndicator } from 'react-native';

import { Text, View } from '@/components/Themed';

import React, { useState } from 'react';

import Ionicon from 'react-native-vector-icons/Ionicons';

var myTest = true;

export default function HomeBottom() {

  return (
    
    <View style={styles.container}>
      <View style={{alignItems: 'center', alignContent: 'center', width: '100%'}}>
        <View style={styles.iceberg_title}>
          <Text style={{fontSize: 18, fontWeight: 'bold', paddingLeft: 10, color: 'gray'}}>Welcome to Penguin.</Text>
          <Text style={{fontSize: 23, fontWeight: 'bold', paddingLeft: 10}}>Browse your Icebergs...</Text>
        </View>

        <View style={styles.iceberg_list}>
      {/* <ScrollView style={{width: '100%'}} contentContainerStyle={styles.iceberg_sv_container} bounces={false} centerContent={true} showsVerticalScrollIndicator={false}>*/}
          <View style={styles.iceberg}>
            <Text style={styles.iceberg_item_text}>RPI</Text>
          </View>

          <View style={styles.iceberg}>
            <Text style={styles.iceberg_item_text}>MIT</Text>
          </View>

          <View style={styles.iceberg}>
            <Text style={styles.iceberg_item_text}>Troy</Text>
          </View>

          <View style={styles.iceberg}>
            <Text style={styles.iceberg_item_text}>NYC</Text>
          </View>

          {/*</ScrollView>*/}
        </View>
      </View>
    </View>
    
  
  );
}


const styles = StyleSheet.create({

  iceberg: {
    borderWidth: 3,
    borderRadius: 100,
    borderStyle: 'solid',
    borderColor: 'white',
    height: 60,
    width: 60,
    alignItems: 'center',
    alignContent: 'center',
    margin: 10,
    justifyContent: 'center',
    backgroundColor: 'purple',
  },

  iceberg_item_text: {
    fontWeight: 'bold',
  },

  iceberg_sv_container: {
    alignContent: 'center',
    alignItems: 'center', 
    //marginBottom: 100,
    paddingBottom: 50,
  },

  iceberg_list: {
    marginTop: 20,
    width: '100%',
    height: '80%',
    borderWidth: 2,
    //borderColor: 'pink',
    alignContent: 'center',
    alignItems: 'center', 
    flexDirection: 'row',
    flexWrap: 'wrap',
    
  },
  container: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  iceberg_title: {
    width: '100%',
    paddingLeft: 10,
  },
});
