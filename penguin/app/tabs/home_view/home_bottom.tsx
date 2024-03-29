import { StyleSheet, Animated, Alert, Button, SafeAreaView, ScrollView, Image, Pressable, ImageBackground, } from 'react-native';

import { Text, View } from '@/components/Themed';

import React, { useState } from 'react';

import { Link, router } from 'expo-router';

import Ionicon from 'react-native-vector-icons/Ionicons';

var myTest = true;

//var testList = []

const displayMapL = new Map();
displayMapL.set('none', 0);

const displayMapT = new Map();
displayMapT.set('none', 0);

const displayMapCount = new Map();
displayMapCount.set('none', 0);

import useMyFirstCustomHook from '@/app/tabs/home_view/selected_test';

function yourComponent() {
  const [count, setCount] = useMyFirstCustomHook(1);
  
  console.log(count);
}

//yourComponent();
//const { count, setCount } = useMyFirstCustomHook();
//console.log(count);


function getMarginRandom(max, id, direction) {
  var breakloop = false;

  var r = 0;

  var loops = 0;

  //r = Math.random() * max;
  var maxMap = 0;
  if (direction == 'L') {

    if (displayMapL.has(id)) {
      return displayMapL.get(id);
    }

    maxMap = Math.max(...displayMapL.values());
    r = maxMap + 45;
    displayMapL.set(id, r);

  } else {

    if (displayMapT.has(id)) {
      return displayMapT.get(id);
    }

    maxMap = Math.max(...displayMapT.values());
    r = maxMap + 60;
    displayMapT.set(id, r);

  }

  if (maxMap > 200) {
    displayMapL.clear();
    displayMapL.set('none', 0);
  }
  



  //map.put(id, )

    

  return r;
}




export default function HomeBottom() {

  const [ activeIceberg, setActiveIceberg ] = useState('RPI');

  
  function setIceberg(id) {
    console.log("received ", id);

    setActiveIceberg(id);

    setTimeout(function() {
      router.replace("/tabs/iceberg");
    }, 300);
    
  }

  const image = { uri: "https://docs.expo.dev/static/images/tutorial/splash.png" };  

  return (
    
    <View style={styles.container}>
      <View style={{alignItems: 'center', alignContent: 'center', width: '100%'}}>
        <View style={styles.iceberg_title}>
          <Text style={{fontSize: 18, fontWeight: 'bold', paddingLeft: 10, color: 'gray'}}>Welcome to Penguin.</Text>
          <Text style={{fontSize: 23, fontWeight: 'bold', paddingLeft: 10}}>Browse your Icebergs...</Text>
          <Text style={{fontSize: 16, fontWeight: 'bold', paddingLeft: 10, color: '#007AFF'}}>Currently in {activeIceberg}</Text>
        </View>

        <View style={styles.iceberg_list}>
       
       {/* <ScrollView style={{width: '100%'}} contentContainerStyle={styles.iceberg_sv_container} horizontal={false} bounces={false} centerContent={true} showsVerticalScrollIndicator={false}>
          */}
          <View style={[styles.iceberg, activeIceberg == 'RPI' ? styles.border_active : styles.border_inactive, { position: 'absolute', left: 0, marginLeft: getMarginRandom(250, 'RPI', 'L'), marginTop: getMarginRandom(400, 'RPI', 'T')} ]} >
            <Link href="/tabs/iceberg" asChild>
              <Pressable style={styles.iceberg_img} onPress={() => console.log("iceberg in home pressed")}>
                <ImageBackground source={require("@/assets/images/rpi.jpeg")} style={styles.iceberg_img} imageStyle={{ borderRadius: 100, opacity: 0.75}}>
                  <Text style={styles.iceberg_item_text}>RPI</Text>
                </ImageBackground>
              </Pressable>
            </Link>
          </View>

          <View style={[styles.iceberg, activeIceberg == 'MIT' ? styles.border_active : styles.border_inactive, { position: 'absolute', left: 0, marginLeft: getMarginRandom(250, 'MIT', 'L'), marginTop: getMarginRandom(400, 'MIT', 'T')} ]} >
            {/*<Link href="/tabs/doesnotexist" asChild>*/}
              <Pressable style={styles.iceberg_img} onPress={() => setIceberg("MIT")}>
                <ImageBackground source={require("@/assets/images/mit.jpg")} style={styles.iceberg_img} imageStyle={{ borderRadius: 100, opacity: 0.75}}>
                  <Text style={styles.iceberg_item_text}>MIT</Text>
                </ImageBackground>
              </Pressable>
            {/*</Link>*/}
          </View>

          <View style={[styles.iceberg, activeIceberg == 'Troy' ? styles.border_active : styles.border_inactive, { position: 'absolute', left: 0, marginLeft: getMarginRandom(250, 'Troy', 'L'), marginTop: getMarginRandom(400, 'Troy', 'T')}]} >
            <Link href="/tabs/doesnotexist" asChild>
              <Pressable style={styles.iceberg_img} onPress={() => console.log("iceberg in home pressed")}>
                <ImageBackground source={require("@/assets/images/troy.jpg")} style={styles.iceberg_img} imageStyle={{ borderRadius: 100, opacity: 0.75}}>
                  <Text style={styles.iceberg_item_text}>Troy</Text>
                </ImageBackground>
              </Pressable>
            </Link>
          </View>

          <View style={[styles.iceberg, activeIceberg == 'NYC' ? styles.border_active : styles.border_inactive, { position: 'absolute', left: 0, marginLeft: getMarginRandom(250, 'NYC', 'L'), marginTop: getMarginRandom(400, 'NYC', 'T')}]} >
            <Link href="/tabs/doesnotexist" asChild>
              <Pressable style={styles.iceberg_img} onPress={() => console.log("iceberg in home pressed")}>
                <ImageBackground source={require("@/assets/images/nyc.jpg")} style={styles.iceberg_img} imageStyle={{ borderRadius: 100, opacity: 0.75}}>
                  <Text style={styles.iceberg_item_text}>NYC</Text>
                </ImageBackground>
              </Pressable>
            </Link>
          </View>

          <View style={[styles.iceberg, activeIceberg == 'Mass.' ? styles.border_active : styles.border_inactive, { position: 'absolute', left: 0, marginLeft: getMarginRandom(250, 'Mass.', 'L'), marginTop: getMarginRandom(400, 'Mass.', 'T')}]} >
            <Link href="/tabs/doesnotexist" asChild>
              <Pressable style={styles.iceberg_img} onPress={() => console.log("iceberg in home pressed")}>
                <ImageBackground source={require("@/assets/images/mass.jpg")} style={styles.iceberg_img} imageStyle={{ borderRadius: 100, opacity: 0.75}}>
                  <Text style={styles.iceberg_item_text}>Mass.</Text>
                </ImageBackground>
              </Pressable>
            </Link>
          </View>

          <View style={[styles.iceberg, activeIceberg == 'TX' ? styles.border_active : styles.border_inactive, { position: 'absolute', left: 0, marginLeft: getMarginRandom(250, 'TX', 'L'), marginTop: getMarginRandom(400, 'TX', 'T')}]} >
            <Link href="/tabs/doesnotexist" asChild>
              <Pressable style={styles.iceberg_img} onPress={() => console.log("iceberg in home pressed")}>
                <ImageBackground source={require("@/assets/images/tx.jpg")} style={styles.iceberg_img} imageStyle={{ borderRadius: 100, opacity: 0.75}}>
                  <Text style={styles.iceberg_item_text}>TX</Text>
                </ImageBackground> 
              </Pressable>
            </Link>
          </View>


          {/*</ScrollView>*/}
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
    height: 60,
    width: 60,
    alignItems: 'center',
    alignContent: 'center',
    margin: 10,
    justifyContent: 'center',
    //backgroundColor: 'purple',
  },

  border_inactive: {
    borderColor: 'white',
    borderWidth: 3,
  },

  border_active: {
    borderColor: '#007AFF',
    borderWidth: 5,
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
    height: 500,  
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
