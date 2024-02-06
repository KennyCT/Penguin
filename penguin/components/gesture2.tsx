import { GestureDetector, Gesture } from 'react-native-gesture-handler';

import { StyleSheet } from 'react-native';

import { Text, View } from '@/components/Themed';

import Animated from 'react-native-reanimated';

export default function Ball() {
  const pan = Gesture.Pan();

  return (

        <GestureDetector gesture={pan}>
        <Animated.View style={[styles.ball]} />
        </GestureDetector>

  );
}



const styles = StyleSheet.create({
    ball: {
      width: 100,
      height: 100,
      borderRadius: 100,
      backgroundColor: 'blue',
      alignSelf: 'center',
    },
  });