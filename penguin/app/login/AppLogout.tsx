import { StyleSheet, Animated, Alert, Button, SafeAreaView, ScrollView, Image } from 'react-native';

import { Text, View } from '@/components/Themed';

import { Link, router } from 'expo-router';

import React, { useCallback } from 'react'

export default function LogoutScreen({loginStatus, setLoginStatus}) {

  const handleInputChange = useCallback(event => {
    setLoginStatus("false"), router.replace('/')
  }, [setLoginStatus])

  return (
  
      <View>
        <Button onPress={handleInputChange}  title="Log Out" color="red" />
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
    width: 250,
    height: 200
  }
});
