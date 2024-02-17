import { StyleSheet, Animated, Alert, Button, SafeAreaView, ScrollView, Image } from 'react-native';

import { Text, View } from '@/components/Themed';
import { Link, router } from 'expo-router';

import LoginScreen from '@/app/login/AppLogin'
import LogoutScreen from '@/app/login/AppLogout'
import { loginStatusHook } from '@/app/index'

export default function TabOneScreen() {

  const [loginStatus, setLoginStatus] = loginStatusHook('');

  return (
    
      <ScrollView 
            contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}
            horizontal={true}
            directionalLockEnabled={true}
            scrollEventThrottle={16}
            onScroll={event => 
            { 
              var currentOffset = event.nativeEvent.contentOffset.x;
              var direction = currentOffset > 0 ? 'left' : 'right';

              console.log(currentOffset, Math.abs(currentOffset));

              if (direction == 'left' && Math.abs(currentOffset) > 65) {
                router.replace('/tabs/iceberg');
              }

            }}
      >

      <View style={styles.container}>

        <Text style={styles.title}>You are LOGGED IN</Text>

        <LogoutScreen loginStatus={loginStatus} setLoginStatus={setLoginStatus}></LogoutScreen>

        <Text style={styles.title}>Home Screen.</Text>
        <Link href="/tabs/iceberg" asChild><Button onPress={() => console.log("pressed")} title="Go to Icebergs" /></Link>
        {/*<Link href="/" asChild><Button onPress={() => console.log("pressed")} title="Go to Index" /></Link>*/}

        <Image style={styles.image1} source={require('@/assets/images/home_fun.jpg')} />

      </View>
     
      </ScrollView>
    
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '20%',
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
