import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import Background from "../components/Background";
import GetPackages from "../components/GetPackages";

const packages = () => {
  return (
    <Background>
      <ScrollView style={styles.container}>
        <GetPackages />
      </ScrollView>
    </Background>
  );
};

export default packages;

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
});
