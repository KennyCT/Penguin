import { StyleSheet, Animated, Alert, Button, SafeAreaView, ScrollView } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';

var AnimatedScrollView = Animated.createAnimatedComponent(ScrollView);

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab One Lol</Text>
      <Button onPress={() => { console.log('You tapped the button!'); }} title="Press Me" />

      <AnimatedScrollView
            horizontal={true}
            directionalLockEnabled={true}
            style={[{flex: 1, height: 100}, {backgroundColor: 'red'}]}
            onScroll={console.log("Scrolled")}
            scrollEventThrottle={16}
          >
            <View style={{flex: 1}}>
              <Text>----- Slide the row that way and release</Text>
            </View>
          </AnimatedScrollView>

      <ScrollView
   horizontal={true}
   pagingEnabled={true}
   onMomentumScrollEnd={event => {
      console.log("scroll ended")
   }}>
      <Text>Scroll me here eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee</Text>
</ScrollView>
      <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Text>
      </ScrollView>
    </SafeAreaView>
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
