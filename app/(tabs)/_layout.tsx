import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import React from "react";
import { StyleSheet, View } from "react-native";
import { PackagesProvider } from "../context/PackagesProvider";
import { colors } from "../theme/colors";

const IconWithCircle = ({
  name,
  color,
  size,
  focused,
}: {
  name: any;
  color: string;
  size: number;
  focused: boolean;
}) => (
  <View style={[
      styles.iconCircle,
      { backgroundColor: focused ? colors.clearblue : colors.darkblue },
    ]}>
    <MaterialCommunityIcons
      name={name}
      color={focused ? colors.white : colors.white}
      size={size * 0.9}
    />
  </View>
);

export default function TabLayout() {
  return (
    <PackagesProvider>
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#fff",
        tabBarStyle: {
          backgroundColor: colors.lightblue,
        },
        tabBarShowLabel: false,
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ size, focused }) => (
            <IconWithCircle name="home" size={size} focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="health"
        options={{
          title: "Health",
          headerShown: false,
          tabBarIcon: ({ size, focused }) => (
            <IconWithCircle name="heart" size={size} focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="scan"
        options={{
          title: "Scan",
          headerShown: false,
          tabBarIcon: ({ size, focused }) => (
            <IconWithCircle name="camera" size={size} focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="packages"
        options={{
          title: "Packages",
          headerShown: false,
          tabBarIcon: ({ size, focused }) => (
            <IconWithCircle name="format-list-bulleted-square" size={size} focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="maps"
        options={{
          title: "Maps",
          headerShown: false,
          tabBarIcon: ({ size, focused }) => (
            <IconWithCircle name="map" size={size} focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="truck"
        options={{
          title: "Truck",
          headerShown: false,
          tabBarIcon: ({ size, focused }) => (
            <IconWithCircle name="truck" size={size} focused={focused} />
          ),
        }}
      />
    </Tabs>
    </PackagesProvider>
  );
}

const styles = StyleSheet.create({
  iconCircle: {
    width: 46,
    height: 46,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
});
