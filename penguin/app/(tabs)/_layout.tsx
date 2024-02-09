import { Link, Navigator, Slot } from "expo-router";
import { View, Text, StyleSheet, Pressable, ViewStyle } from "react-native";

export const unstable_settings = {
  initialRouteName: "index",
};

export default function Layout() {
  return (
    <View style={{ flex: 1 }}>
      <Navigator>
        <CustomTabBar />
        <Slot />
      </Navigator>
    </View>
  );
}

function CustomTabBar() {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "#191A20",
        paddingVertical: 60,
        borderBottomColor: "#D8D8D8",
        borderBottomWidth: 1,
      }}
    >

      <View style={{flexDirection: "row", }}>
        <TabLink name="index" href="/(tabs)/">
          {({ focused }) => (
            <Text style={[styles.link, { opacity: focused ? 1 : 0.5 }]}>
              First
            </Text>
          )}
        </TabLink>

        <TabLink name="two" href="/(tabs)/two">
          {({ focused }) => (
            <Text style={[styles.link, { opacity: focused ? 1 : 0.5 }]}>
              Second
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
});