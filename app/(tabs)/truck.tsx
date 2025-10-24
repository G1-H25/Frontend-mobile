import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import Background from "../components/Background";
import GetPackages from "../components/GetPackages";
import TruckTempHumidity from "../components/TruckTempHumidity";

const truck = () => {
  return (
    <Background>
      <TruckTempHumidity />
      <ScrollView>
        <GetPackages />
      </ScrollView>
    </Background>
  );
};

export default truck;

const styles = StyleSheet.create({});
