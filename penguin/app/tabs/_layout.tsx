import { Link, Navigator, Slot } from "expo-router";
import { View, Text, StyleSheet, Pressable, ViewStyle, Image } from "react-native";

//import Icon from "@/components/Icon";
//import ICONS from '@/components/Icon';
//import Icon from 'react-native-vector-icons/FontAwesome';
//import Icon from 'react-native-vector-icons/Ionicons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome5';
import EntypoIcon from 'react-native-vector-icons/Entypo';

export const unstable_settings = {
  initialRouteName: "home",
};

// {/*<Text style={[styles.link, { opacity: focused ? 1 : 0.5 }]}>Home</Text>*/}

export default function Layout() {
  return (
    <View style={styles.temp}>
      <Navigator>
        <CustomTabBar/>
        <Slot />
      </Navigator>
    </View>
  );
}

function CustomTabBar() {
  return (
    <View style={styles.bottomcontent}>
        <TabLink name="home" href="/tabs/home">
          {({ focused }) => (    
           //<FontAwesomeIcon style={[styles.icon, { opacity: focused ? 1 : 0.5 }]} name="home" size={30} color="white" />
           <EntypoIcon style={[styles.icon, { opacity: focused ? 1 : 0.5 }]} name="home" size={30} color="white" />
          )}
        </TabLink>

        <TabLink name="iceberg" href="/tabs/iceberg">
          {({ focused }) => (
              <FontAwesomeIcon style={[styles.icon, { opacity: focused ? 1 : 0.5 }]} name="icicles" size={30} color="white" />
          )}
        </TabLink>

        <TabLink name="igloo" href="/tabs/igloo">
          {({ focused }) => (
              <FontAwesomeIcon style={[styles.icon, { opacity: focused ? 1 : 0.5 }]} name="igloo" size={30} color="white" />
          )}
        </TabLink>
    </View>
    
  );
}

function useIsTabSelected(name: string): boolean {
  const { state } = Navigator.useContext();
  const current = state.routes.find((route, i) => state.index === i);
  return current.name === name;
}

function TabLink ({
  children,
  name,
  href,
  style,
}: {
  children?: any;
  name: string;
  href: string;
  style?: ViewStyle;
}) {
  const focused = useIsTabSelected(name);
  return (
    <Link href={href} asChild style={style}>
      <Pressable>{(props) => children({ ...props, focused })}</Pressable>
    </Link>
  );
}

const styles = StyleSheet.create({
  link: {
    fontSize: 24,
    color: "#E7E9E6",
    fontWeight: "bold",
    paddingHorizontal: 24,
  },
  temp: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomcontent: {
    position: 'absolute', 
    bottom: 0,
    zIndex: 999,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#191A20",
    //paddingVertical: 30,
    borderBottomColor: "#D8D8D8",
    borderBottomWidth: 1,
    paddingVertical: 20,
    height: 85,
    width: '100%',
    //borderColor: 'red',
    //borderWidth: 1,
    alignContent: 'center',

  },
  icon: {
    //borderColor: 'red',
    //borderWidth: 1,
    paddingHorizontal: 30,
  }
});