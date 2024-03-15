import { StyleSheet, Animated, Alert, Button, SafeAreaView, ScrollView, Image, Pressable, TouchableOpacity, TouchableWithoutFeedback, FlatList } from 'react-native';

import { Text, View } from '@/components/Themed';

import React, { useState } from 'react';

import Ionicon from 'react-native-vector-icons/Ionicons';

var myTest = true;

export default function IcebergView() {

  const [ color, setColor ] = useState('#fff');
  //const [ backgroundColor, setBackgroundColor ] = useState('#f44');

  const [ opacity, setOpacity ] = useState(1);

  const [ opacityClubs, setOpacityClubs ] = useState(true);
  const [ opacityFrats, setOpacityFrats ] = useState(true);
  const [ opacityOrgs, setOpacityOrgs ] = useState(true);
  const [ opacityOther, setOpacityOther ] = useState(true);

  swapColor = function(option) {
    if (option == '#fff') {
      setColor('#000');
    } else {
      setColor('#fff');
    }
  }


  return (
    
    <View style={styles.container}>
      
      { /*Title*/ }
      <View style={styles.iceberg_title}>
       <Text style={{fontSize: 28, fontWeight: 'bold', paddingLeft: 10}}>RPI Iceberg</Text>
      </View>

      <View style={styles.tags}>

        <Pressable style={styles.tag_group} onPressIn={() => setOpacityClubs(!opacityClubs) }>
          <Text style={[styles.tagCheckBox, {'backgroundColor':` ${opacityClubs ? 'rgb(255, 255, 255)' : 'rgb(0, 0, 0)'}`}]}></Text>
          <Text style={[styles.tag, {'opacity':` ${opacityClubs ? 1 : 0.5}`}]}>clubs</Text>
        </Pressable>
        
        <Pressable style={styles.tag_group} onPressIn={() => setOpacityFrats(!opacityFrats) }>
          <Text style={[styles.tagCheckBox, {'backgroundColor':` ${opacityFrats ? 'rgb(255, 255, 255)' : 'rgb(0, 0, 0)'}`}]}></Text>
          <Text style={[styles.tag, {'opacity':` ${opacityFrats ? 1 : 0.5}`}]}>frats</Text>
        </Pressable>

        <Pressable style={styles.tag_group} onPressIn={() => setOpacityOrgs(!opacityOrgs) }>
          <Text style={[styles.tagCheckBox, {'backgroundColor':` ${opacityOrgs ? 'rgb(255, 255, 255)' : 'rgb(0, 0, 0)'}`}]}></Text>
          <Text style={[styles.tag, {'opacity':` ${opacityOrgs ? 1 : 0.5}`}]}>orgs</Text>
        </Pressable>

        <Pressable style={styles.tag_group} onPressIn={() => setOpacityOther(!opacityOther) }>
          <Text style={[styles.tagCheckBox, {'backgroundColor':` ${opacityOther ? 'rgb(255, 255, 255)' : 'rgb(0, 0, 0)'}`}]}></Text>
          <Text style={[styles.tag, {'opacity':` ${opacityOther ? 1 : 0.5}`}]}>other</Text>
        </Pressable>

      </View>

     
      <View style={styles.post_container}>
      <ScrollView style={{width: '100%'}} contentContainerStyle={styles.post_sv_container} bounces={false} centerContent={true} showsVerticalScrollIndicator={false}>
        <View style={styles.post}>
          <Text>Post title1</Text>
          <Text>Post author</Text>
          <Text>Post content</Text>
          <Text>Post media</Text>
          <Text>Post date</Text>
        </View>
        <View style={styles.post}>
          <Text>Post title2</Text>
        </View>
        <View style={styles.post}>
          <Text>Post title3</Text>
        </View>
        <View style={styles.post}>
          <Text>Post title4</Text>
        </View>
        <View style={styles.post}>
          <Text>Post title5</Text>
        </View>
        <View style={styles.post}>
          <Text>Post title6</Text>
        </View>
        <View style={styles.post}>
          <Text>Post title7</Text>
        </View>
        </ScrollView>
      </View>
      

  </View>
    
  
  );
}


const styles = StyleSheet.create({

  post_sv_container: {
    alignContent: 'center',
    alignItems: 'center', 
    //marginBottom: 100,
    paddingBottom: 50,
  },

  post_container: {
    marginTop: 20,
    width: '100%',
    height: '80%',
    borderWidth: 2,
    //borderColor: 'pink',
    alignContent: 'center',
    alignItems: 'center', 
    
  },

  post: {
    backgroundColor: '#292826',
    height: 100,
    width: '90%',
    borderRadius: 8,
    alignContent: 'center',
    alignItems: 'center', 
    paddingHorizontal: 20,
    marginBottom: 20,
  },

  tags: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    padding: 10,
  },

  tag_group: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
  },

  tag: {
    //borderColor: 'green',
    borderWidth: 1,
    marginHorizontal: 5,
    borderRadius: 10,
    //padding: 5,
    fontSize: 16,
  },

  tagCheckBox: {
    padding: 5,
    height: 12,
    backgroundColor: 'white',
    borderColor: '#403e38',
    borderWidth: 2,
  },

  iceberg_title: {
    width: '100%',
    paddingLeft: 10,
  },

  container: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  }
});
