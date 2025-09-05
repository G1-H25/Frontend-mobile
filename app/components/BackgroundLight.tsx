import React, { ReactNode } from "react";
import { StyleSheet, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { colors } from "../theme/colors";

type BackgroundProps = {
  children: ReactNode;
};

const BackgroundLight = ({ children }: BackgroundProps) => {
  return (
    <View style={styles.Background}>
      <ScrollView contentContainerStyle={styles.scrollContent}
      showsVerticalScrollIndicator={false}>
      {children}</ScrollView>
    </View>
  );
};

export default BackgroundLight;

const styles = StyleSheet.create({
  Background: {
    flex: 1,
    backgroundColor: colors.bright,
    borderRadius: 10,
    margin: 20,
    overflow: "hidden",
  },
  scrollContent: {
    padding: 20
  }
});
