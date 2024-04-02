import { StyleSheet, Animated, Alert, Button, SafeAreaView, ScrollView, Image, Pressable } from 'react-native';

import { Text, View } from '@/components/Themed';

import { Link, router } from 'expo-router';

import Ionicon from 'react-native-vector-icons/Ionicons';

import EntypoIcon from 'react-native-vector-icons/Entypo';

import LogoutScreen from '@/app/login/AppLogout'

import { loginStatusHook } from '@/app/index'

export default function HomeTop() {

  const [loginStatus, setLoginStatus] = loginStatusHook('');

  return (
    
  <View style={styles.navBar}>

    <View style={styles.leftContainer}>
        <LogoutScreen loginStatus={loginStatus} setLoginStatus={setLoginStatus}></LogoutScreen>
    </View>

    <View style={styles.rightContainer}>
      <Link href="/tabs/iceberg_view/iceberg_join" asChild>
      {/*<Link href="../../modal" asChild>*/}
        <Pressable style={styles.search_button} onPress={() => console.log("join pressed")}>
          <EntypoIcon name="plus" size={30} color="#007AFF" />
          <Text style={styles.navbarText}>Join Iceberg</Text> 
        </Pressable>   
      </Link> 
    </View>

  </View>
    
  
  );
}

const styles = StyleSheet.create({
  navbarText: {
    color: '#007AFF',
    fontSize: 17,
    verticalAlign: 'top'
  },
  browse_igloos_button: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    //backgroundColor: 'blue',
  },
  search_button: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  navBar: {
    height: 100,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    //backgroundColor: 'blue',
    //position: 'absolute',
    //top: 0,
    width: '100%',
    //marginTop: 60,
    paddingTop: 40,
    flex: 0,
  },
  leftContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    //marginLeft: 10,
    //backgroundColor: 'pink'
  },
  rightContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginRight: 10,
    //backgroundColor: 'red',
  },
});
