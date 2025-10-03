import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { ActivityIndicator } from "react-native-paper";
import { colors } from "../theme/colors";
import { Package } from "../types/types";

type PackageObjectProps = {
  package: Package;
  index?: number;
};

const PackageObject = ({ package: pkg, index }: PackageObjectProps) => {
  if (!pkg) return <ActivityIndicator />;

  return (
    <View style={styles.container}>
      {index !== undefined && (
        <Text style={styles.text}>ID: {pkg.sändningsnr}</Text>
      )}

      <Text style={styles.text}>
        Temperatur: {pkg.currentTemp}°C
      </Text>
      <Text style={styles.text}>
        Luftfuktighet: {pkg.currentHumidity}%
      </Text>
      <Text style={styles.text}>TUG: {pkg.timeOutsideRange}</Text>
      <Text style={styles.text}>
        Route: {pkg.rutt}
      </Text>

      <Text style={styles.text}>
        Transportör: {pkg.transport.name}
      </Text>

      <Text style={styles.text}>
        Från: {pkg.sender.name}, {pkg.sender.adress1}
      </Text>

      <Text style={styles.text}>
        Förväntad temperatur: {pkg.expectedTemp.min}° - {pkg.expectedTemp.max}°
      </Text>

      <Text style={styles.text}>
        Förväntad luftfuktighet: {pkg.expectedHumidity.min}% - {pkg.expectedHumidity.max}%
      </Text>

      <Text style={styles.text}>
        Status: {pkg.status.text} @ {new Date(pkg.status.timestamp).toLocaleString()}
      </Text>
    </View>
  );
};

export default PackageObject;

const styles = StyleSheet.create({
  text: {
    color: colors.black,
    marginVertical: 2,
  },
  container: {
    backgroundColor: colors.white,
    padding: 10,
    margin: 10,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: colors.lightblue
  },
});
