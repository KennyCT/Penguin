import { StyleSheet, Animated, Alert, Button, SafeAreaView, ScrollView, Image } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';

import { Link, router } from 'expo-router';

import React, { useCallback } from 'react'

import { getLoggedIn, setLoggedIn } from '@/app/index';

function refreshPage() {
  console.log("refresh..");
  console.log(getLoggedIn());
  setLoggedIn(true);
}

export default function LoginScreen({loginStatus, setLoginStatus}) {

  const handleInputChange = useCallback(event => {
    setLoginStatus("true")
  }, [setLoginStatus])

  return (
  
      <View>
        <Button onPress={handleInputChange}  title="Log In" color="green" />
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