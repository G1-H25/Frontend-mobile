import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import React from "react";
import { StyleSheet, View } from "react-native";
import { colors } from "../theme/colors";

const IconWithCircle = ({
  name,
  color,
  size,
}: {
  name: string;
  color: string;
  size: number;
}) => (
  <View style={[styles.iconCircle, { backgroundColor: colors.darkblue }]}>
    <MaterialCommunityIcons
      name={name}
      color={colors.white}
      size={size * 0.9}
    />
  </View>
);

export default function TabLayout() {
  return (
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
          tabBarIcon: ({ color, size }) => (
            <IconWithCircle name="home" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="health"
        options={{
          title: "Health",
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <IconWithCircle name="heart" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="scan"
        options={{
          title: "Scan",
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <IconWithCircle name="camera" color={color} size={size} />
          ),
        }}
      />
      {/* <Tabs.Screen
        name="userprofile"
        options={{
          title: "Userprofile",
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <IconWithCircle name="account" color={color} size={size} />
          ),
        }}
      /> */}
      <Tabs.Screen
        name="maps"
        options={{
          title: "Maps",
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <IconWithCircle name="map" color={color} size={size} />
          ),
        }}
      />
    </Tabs>
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
