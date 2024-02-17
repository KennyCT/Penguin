import { StyleSheet, View, } from 'react-native';
import React from 'react'

import { GestureDetector, Gesture  } from 'react-native-gesture-handler';

export default function TestComponent() {

    const singleTap = Gesture.Tap()
    .maxDuration(250)
    .onEnd(() => {
        console.log("tap");
    })
    
    .onStart(() => {
      console.log('Single tap!');
    });

  const doubleTap = Gesture.Tap()
    .maxDuration(250)
    .numberOfTaps(2)
    .onEnd(() => {
        console.log("tap");
    })
    .onStart(() => {
      console.log('Double tap!');
    });

  return (
   
    <GestureDetector gesture={Gesture.Exclusive(doubleTap, singleTap)}>
      <View style={styles.box} />
    </GestureDetector>
   
  );
}

const styles = StyleSheet.create({
    box: {
    height: 120,
    width: 120,
    backgroundColor: '#b58df1',
    borderRadius: 20,
    marginBottom: 30,
    marginTop: 100
  },
})