import { StyleSheet, Animated, Alert, Button, SafeAreaView, ScrollView, Image, TextInput, TouchableOpacity, Pressable } from 'react-native';
import React, { useState } from 'react';
import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';

import { Link, router } from 'expo-router';

import LoginScreen from '@/app/login/AppLogin'
import LogoutScreen from '@/app/login/AppLogout'

export default function Index() {

  const [loginStatus, setLoginStatus] = useState('false')

  console.log("login status", {loginStatus});

  if (loginStatus == 'false') {
    return (
        <LoginScreen loginStatus={loginStatus} setLoginStatus={setLoginStatus}></LoginScreen>
    );
  }
  else {
    
    return (
      <View style={styles.container}>
      <Text style={styles.title}>You are LOGGED IN</Text>
      <Link href="/tabs/home" asChild><Button onPress={() => console.log("pressed")} title="Go to Home (tabs)" /></Link>
      <LogoutScreen loginStatus={loginStatus} setLoginStatus={setLoginStatus}></LogoutScreen>

      <Text>content here </Text>
    </View>
    )
  }
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
  }

});
