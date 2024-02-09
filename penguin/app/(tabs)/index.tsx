import { StyleSheet, Animated, Alert, Button, SafeAreaView, ScrollView } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';

import { Link, router } from 'expo-router';

var AnimatedScrollView = Animated.createAnimatedComponent(ScrollView);

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      
      <Text style={styles.title}>Tab One</Text>

      <Link href="/(tabs)/two" asChild><Button onPress={() => console.log("pressed")} title="Go to Tab 2" /></Link>

      <AnimatedScrollView
            horizontal={true}
            directionalLockEnabled={true}
            style={[{flex: 1, height: 100}, {backgroundColor: 'red'}]}
            onScroll={event => 
            { 
              console.log("! scroll begin");
              
              var currentOffset = event.nativeEvent.contentOffset.x;
              var direction = currentOffset > this.offset ? 'left' : 'right';
              //this.offset = currentOffset;
              if (direction == 'left') {
                router.replace('/(tabs)/two');
              }
              console.log(direction);
            }}
            onMomentumScrollEnd={event => {console.log("! scroll ended")}}
            scrollEventThrottle={16}
          >
          <View style={{flex: 1}}>
            <Text>----- Scroll Me -----</Text>
          </View>
      </AnimatedScrollView>


      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="app/(tabs)/index.tsx" />
    </View>
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
  scrollView: {
    backgroundColor: 'pink',
    marginHorizontal: 20,
  },
  text: {
    fontSize: 42,
  },
});
