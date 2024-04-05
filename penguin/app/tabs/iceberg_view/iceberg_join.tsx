import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, Pressable } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';

import { Link, router } from 'expo-router';

import IcebergSearch from '@/app/tabs/iceberg_view/iceberg_search';

import EntypoIcon from 'react-native-vector-icons/Entypo';

import Ionicon from 'react-native-vector-icons/Ionicons';

export default function IcebergJoinScreen() {
  return (
    <View style={styles.container}>
      
      <View style={styles.navBar}>
        <View style={styles.leftContainer}>
          <Link href="/tabs/home" asChild>
            <Pressable style={styles.browse_igloos_button} onPress={() => console.log("back pressed")}>
              <Ionicon name="chevron-back" size={30} color="#007AFF"/>
              <Text style={styles.navbarText}>Back</Text>  
            </Pressable>  
          </Link>
        </View>
      </View>

      <Text style={styles.title}>Join an Iceberg</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <IcebergSearch></IcebergSearch>

      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    //borderWidth: 2,
    //borderColor: 'blue',
    width: '100%',
    borderWidth: 3,
    borderColor: 'red',
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

    borderWidth: 3,
    borderColor: 'blue',
  },

  leftContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    //marginLeft: 10,
    marginLeft: 10,
    //backgroundColor: 'pink'

    borderWidth: 4,
    borderColor: 'orange',
  },

  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
