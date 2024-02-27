import { StyleSheet, Animated, Alert, Button, SafeAreaView, ScrollView, Image, Pressable } from 'react-native';

import { Text, View } from '@/components/Themed';

import Ionicon from 'react-native-vector-icons/Ionicons';

export default function IcebergView() {
  return (
    
    
  <View style={styles.iceberg_title}>

    <Text style={{fontSize: 28, fontWeight: 'bold'}}>RPI Iceberg</Text>

  </View>
    
  
  );
}

const styles = StyleSheet.create({
  iceberg_title: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    //backgroundColor: 'red',
    flex: 0,
    width: '100%',
    position: 'absolute',
    top: 0,
    marginTop: 120,
    paddingLeft: 20,


  },
});
