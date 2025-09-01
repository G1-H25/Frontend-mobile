import React from "react";
import { StyleSheet, Text } from "react-native";
import Background from "../components/Background";
import BackgroundLight from "../components/BackgroundLight";
import PackageObject from "../components/PackageObject";
import { colors } from "../theme/colors";

const home = () => {
  return (
    <Background>
      <BackgroundLight>
        <Text style={styles.text}>home</Text>
        <PackageObject
          id="12345"
          name="Sample Package"
          weight={2.5}
          from="New York"
          destination="Los Angeles"
        />
        <PackageObject
          id="67890"
          name="Another Package"
          weight={1.2}
          from="Chicago"
          destination="Miami"
        />
      </BackgroundLight>
    </Background>
  );
};

export default home;

const styles = StyleSheet.create({
  text: {
    color: colors.white,
  },
});
