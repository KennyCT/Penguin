import { Link, Navigator, Slot } from "expo-router";
import { View, Text, StyleSheet, Pressable, ViewStyle } from "react-native";

export const unstable_settings = {
  initialRouteName: "home",
};

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

      <View style={{flexDirection: "row", }}>
        <TabLink name="home" href="/tabs/home">
          {({ focused }) => (
            <Text style={[styles.link, { opacity: focused ? 1 : 0.5 }]}>
              Home
            </Text>
          )}
        </TabLink>

        <TabLink name="iceberg" href="/tabs/iceberg">
          {({ focused }) => (
            <Text style={[styles.link, { opacity: focused ? 1 : 0.5 }]}>
              Icebergs
            </Text>
          )}
        </TabLink>

        <TabLink name="igloo" href="/tabs/igloo">
          {({ focused }) => (
            <Text style={[styles.link, { opacity: focused ? 1 : 0.5 }]}>
              Igloos
            </Text>
          )}
        </TabLink>

      </View>
    </View>
    
  );
}

function useIsTabSelected(name: string): boolean {
  const { state } = Navigator.useContext();
  const current = state.routes.find((route, i) => state.index === i);
  return current.name === name;
}

function TabLink({
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
    paddingVertical: 40,
    borderBottomColor: "#D8D8D8",
    borderBottomWidth: 1,
  }
});