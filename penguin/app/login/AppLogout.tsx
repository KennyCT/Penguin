import { StyleSheet, Animated, Alert, Button, SafeAreaView, ScrollView, Image, Pressable } from 'react-native';

import { Text, View } from '@/components/Themed';

import { Link, router } from 'expo-router';

import React, { useCallback } from 'react'

import Ionicon from 'react-native-vector-icons/Ionicons';

export default function LogoutScreen({loginStatus, setLoginStatus}) {

  const handleInputChange = useCallback(event => {
    setLoginStatus("false"), router.replace('/')
  }, [setLoginStatus])

  return (
  
      <View>
        {/*<Button onPress={handleInputChange} title="Log Out" color="red" /> */}
        <Pressable style={styles.logoutbutton} onPress={handleInputChange}>
          <Ionicon name="log-out-outline" size={25} style={{marginRight: 5, marginLeft: 5}} color="#007AFF"/>
          <Text style={styles.navbarText}>Log Out</Text>  
        </Pressable>
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
  logoutbutton: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    //backgroundColor: 'blue',
  },
  navbarText: {
    color: '#007AFF',
    fontSize: 17,
    verticalAlign: 'top'
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
    width: 250,
    height: 200
  }
});
