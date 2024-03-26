import { StyleSheet, Animated, Alert, Button, SafeAreaView, ScrollView, Image, Pressable, ImageBackground, } from 'react-native';

import { Text, View } from '@/components/Themed';

import React, { useState } from 'react';

import { Link, router } from 'expo-router';

import Ionicon from 'react-native-vector-icons/Ionicons';

var myTest = true;

function getMarginRandom() {
  return Math.random() * 150; 
}

export default function HomeBottom() {

  const image = { uri: "https://docs.expo.dev/static/images/tutorial/splash.png" };

  return (
    
    <View style={styles.container}>
      <View style={{alignItems: 'center', alignContent: 'center', width: '100%'}}>
        <View style={styles.iceberg_title}>
          <Text style={{fontSize: 18, fontWeight: 'bold', paddingLeft: 10, color: 'gray'}}>Welcome to Penguin.</Text>
          <Text style={{fontSize: 23, fontWeight: 'bold', paddingLeft: 10}}>Browse your Icebergs...</Text>
        </View>

        <View style={styles.iceberg_list}>
        <ScrollView style={{width: '100%'}} contentContainerStyle={styles.iceberg_sv_container} horizontal={false} bounces={false} centerContent={true} showsVerticalScrollIndicator={false}>
          
          <View style={[styles.iceberg, { marginLeft: getMarginRandom(), marginRight: getMarginRandom(), position: 'absolute', left: 0, }]} >
            <Link href="/tabs/iceberg" asChild>
              <Pressable style={styles.iceberg_img} onPress={() => console.log("iceberg in home pressed")}>
                <ImageBackground source={require("@/assets/images/rpi.jpeg")} style={styles.iceberg_img} imageStyle={{ borderRadius: 100, opacity: 0.75}}>
                  <Text style={styles.iceberg_item_text}>RPI</Text>
                </ImageBackground>
              </Pressable>
            </Link>
          </View>

          <View style={[styles.iceberg, { marginLeft: getMarginRandom(), marginRight: getMarginRandom() }]} >
            <Link href="/tabs/doesnotexist" asChild>
              <Pressable style={styles.iceberg_img} onPress={() => console.log("iceberg in home pressed")}>
                <ImageBackground source={require("@/assets/images/mit.jpg")} style={styles.iceberg_img} imageStyle={{ borderRadius: 100, opacity: 0.75}}>
                  <Text style={styles.iceberg_item_text}>MIT</Text>
                </ImageBackground>
              </Pressable>
            </Link>
          </View>

          <View style={[styles.iceberg, { marginLeft: getMarginRandom(), marginRight: getMarginRandom() }]} >
            <Link href="/tabs/doesnotexist" asChild>
              <Pressable style={styles.iceberg_img} onPress={() => console.log("iceberg in home pressed")}>
                <ImageBackground source={require("@/assets/images/troy.jpg")} style={styles.iceberg_img} imageStyle={{ borderRadius: 100, opacity: 0.75}}>
                  <Text style={styles.iceberg_item_text}>Troy</Text>
                </ImageBackground>
              </Pressable>
            </Link>
          </View>

          <View style={[styles.iceberg, { marginLeft: getMarginRandom(), marginRight: getMarginRandom() }]} >
            <Link href="/tabs/doesnotexist" asChild>
              <Pressable style={styles.iceberg_img} onPress={() => console.log("iceberg in home pressed")}>
                <ImageBackground source={require("@/assets/images/nyc.jpg")} style={styles.iceberg_img} imageStyle={{ borderRadius: 100, opacity: 0.75}}>
                  <Text style={styles.iceberg_item_text}>NYC</Text>
                </ImageBackground>
              </Pressable>
            </Link>
          </View>

          <View style={[styles.iceberg, { marginLeft: getMarginRandom(), marginRight: getMarginRandom() }]} >
            <Link href="/tabs/doesnotexist" asChild>
              <Pressable style={styles.iceberg_img} onPress={() => console.log("iceberg in home pressed")}>
                <ImageBackground source={require("@/assets/images/mass.jpg")} style={styles.iceberg_img} imageStyle={{ borderRadius: 100, opacity: 0.75}}>
                  <Text style={styles.iceberg_item_text}>Mass.</Text>
                </ImageBackground>
              </Pressable>
            </Link>
          </View>

          <View style={[styles.iceberg, { marginLeft: getMarginRandom(), marginRight: getMarginRandom() }]} >
            <Link href="/tabs/doesnotexist" asChild>
              <Pressable style={styles.iceberg_img} onPress={() => console.log("iceberg in home pressed")}>
                <ImageBackground source={require("@/assets/images/tx.jpg")} style={styles.iceberg_img} imageStyle={{ borderRadius: 100, opacity: 0.75}}>
                  <Text style={styles.iceberg_item_text}>TX</Text>
                </ImageBackground>
              </Pressable>
            </Link>
          </View>


          </ScrollView>
        </View>
      </View>
    </View>
    
  
  );
}


const styles = StyleSheet.create({

  iceberg_img: {
    resizeMode: 'cover',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    alignContent: 'center',
    //opacity: 0.8,
  },

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
    //backgroundColor: 'purple',
    
  },

  iceberg_item_text: {
    fontWeight: 'bold',
    textShadowColor: 'black',
    textShadowRadius: 3,
    fontSize: 18,
    opacity: 1.0,
  },

  iceberg_sv_container: {
    alignContent: 'center',
    alignItems: 'center', 
    //marginBottom: 100,
    //flexDirection: 'row',
    //paddingBottom: 50,
  },

  iceberg_list: {
    marginTop: 20,
    width: '100%',
    //height: '80%',
    borderWidth: 2,
    //borderColor: 'pink',
    //alignContent: 'center',
    //alignItems: 'center', 
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
