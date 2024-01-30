import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import Component_test from './components/component_test'

const PlaceholderImage = require('./assets/icon.png');

export default function App() {
  return (
    <View style={styles.container}>
      {/*<View style={styles.imageContainer}>*/}
        <Image source={PlaceholderImage} style={styles.image} />
        <Component_test />
      {/*</View>*/}
      <Text>Penguin yeaaa</Text>
      <Text style={{ color: "red" }}>Red</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    flex: 1,
    paddingTop: 60,
    borderColor: "red",
    borderWidth: 1,
  },
  image: {
    width: 320,
    height: 200,
    borderRadius: 18,
  },
});


