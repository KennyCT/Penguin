import { StyleSheet, Animated, Alert, Button, SafeAreaView, ScrollView, Image } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';

import { Link, router } from 'expo-router';

export default function TabTwoScreen() {
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

        if (direction == 'right' && Math.abs(currentOffset) > 65) {
          router.replace('/(tabs)/home');
        }

      }}
    >

    <View style={styles.container}>
      
      <Text style={styles.title}>Icebergs</Text>
      <Link href="/(tabs)/home" asChild><Button onPress={() => console.log("pressed")} title="Go to Home" /></Link>

      <Image
        style={styles.image1}
        source={require('@/assets/images/iceberg_fun.png')}
      />

    </View>

  </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
  image1: {
    width: 250,
    height: 200
  }
});
