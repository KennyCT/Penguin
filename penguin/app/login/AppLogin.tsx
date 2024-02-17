import { StyleSheet, Animated, Alert, Button, SafeAreaView, ScrollView, Image, Pressable } from 'react-native';

import { Text, View } from '@/components/Themed';
import HomeButton from '@/components/HomeButton'

import { Link, router } from 'expo-router';

import React, { useCallback } from 'react'

export default function LoginScreen({loginStatus, setLoginStatus}) {

  const handleInputChange = useCallback(event => {
    setLoginStatus("true")
  }, [setLoginStatus])

  return (
  
      <View style={{ flex: 1 }}>
          <View>
              <Image
                  source={require("@/assets/hero1.jpg")}
                  style={styles.image1}
              />          
              <Image
                  source={require("@/assets/hero2.jpg")}
                  style={styles.image2}
              />          
              <Image
                  source={require("@/assets/hero3.jpg")}
                  style={styles.image3}
              />          
              <Image
                  source={require("@/assets/hero4.jpg")}
                  style={styles.image4}
              />
          </View>        

          {/* content  */}    

          <View style={{ paddingHorizontal: 22, position: "absolute", top: 400, width: "100%" }}>
              <Text style={{ fontSize: 46, fontWeight: 800, color: "white"}}>Welcome to</Text>
              <Text style={{fontSize: 46, fontWeight: 800, color: "white"}}>Penguin</Text>

              <View style={{ marginVertical: 22 }}>
                  <Text style={{ fontSize: 16, color: "white", marginVertical: 4}}>Connect with members from your school community.</Text>
              </View>   

              <HomeButton title="Sign Up" onPress={() => console.log("signup press")} style={{ marginTop: 22, width: "100%" }} />      

              <View style={{ flexDirection: "row", marginTop: 12, justifyContent: "center" }}>
                  <Pressable onPress={handleInputChange} >
                      <Text style={{ fontSize: 16, color: "white", fontWeight: "bold", marginLeft: 4 }}>Login</Text>
                  </Pressable>                    
              </View>     

          </View>

        </View>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100%',
  },
  scrollcontainer: {
    flex: 1
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 42,
  },
  image1: {
    height: 100,
    width: 100,
    borderRadius: 20,
    position: "absolute",
    top: 10,
    transform: [
        { translateX: 20 },
        { translateY: 50 },
        { rotate: "-15deg" }
    ]
  },
  image2: {
    height: 100,
    width: 100,
    borderRadius: 20,
    position: "absolute",
    top: -30,
    left: 100,
    transform: [
        { translateX: 50 },
        { translateY: 50 },
        { rotate: "-5deg" }
    ]
  },
  image3: {
    width: 100,
    height: 100,
    borderRadius: 20,
    position: "absolute",
    top: 130,
    left: -50,
    transform: [
        { translateX: 50 },
        { translateY: 50 },
        { rotate: "15deg" }
    ]
  },
  image4: {
    height: 200,
    width: 200,
    borderRadius: 20,
    position: "absolute",
    top: 110,
    left: 100,
    transform: [
        { translateX: 50 },
        { translateY: 50 },
        { rotate: "-15deg" }
    ]
  }
});
