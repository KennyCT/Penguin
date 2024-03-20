import { StyleSheet, Animated, Alert, Button, SafeAreaView, ScrollView, Image, TextInput, TouchableOpacity, Pressable } from 'react-native';
import React, { useState } from 'react';
import { Text, View } from '@/components/Themed';

import { Link, router } from 'expo-router';

import LoginScreen from '@/app/login/AppLogin'
import LogoutScreen from '@/app/login/AppLogout'
import TabOneScreen from './tabs/home';

export function loginStatusHook(initV) {
  const [loginStatus, setLoginStatus] = React.useState(initV);

  return [loginStatus, setLoginStatus];
}

export default function Index() {

  const [loginStatus, setLoginStatus] = loginStatusHook('false');

  console.log("login status", {loginStatus});

  if (loginStatus == 'false') {
    return (
        <LoginScreen loginStatus={loginStatus} setLoginStatus={setLoginStatus}></LoginScreen>
    );
  }
  else if (loginStatus == 'true') {
    //router.replace('/tabs/home');
    router.replace('/login/AppSigninClean');
    /*
    return (
      <View style={styles.container}>
        <Text style={styles.title}>You are LOGGED IN</Text>
        <Link href="/tabs/home" asChild><Button onPress={() => console.log("pressed")} title="Go to Home (tabs)" /></Link>
        <LogoutScreen loginStatus={loginStatus} setLoginStatus={setLoginStatus}></LogoutScreen>

        <TabOneScreen></TabOneScreen>
    </View>
    )*/
  }
  else {
    return (
      <Text>Something went really wrong... check the code!</Text>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 200,
    //minHeight: '100%',
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
