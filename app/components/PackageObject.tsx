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

  if (!pkg) return <ActivityIndicator/>;

  return (
    <View style={styles.container}>
      {index !== undefined && <Text style={styles.text}>ID: {pkg.OrderId}</Text> }
      <Text style={styles.text}>Temperatur: {pkg.CurrentTemp}</Text>
      <Text style={styles.text}>Luftfuktighet: {pkg.CurrentHumidity}</Text>
      <Text style={styles.text}>TUG: {pkg.TimeOutsideRange}</Text>
      <Text style={styles.text}>RouteName: {pkg.RouteName}, {pkg.RouteCode}</Text>
      <Text style={styles.text}>SändningsNr: {pkg.Sändningsnr}</Text>
      <Text style={styles.text}>Från: {pkg.SenderName}</Text>
      <Text style={styles.text}>Till: {pkg.RecipientName}</Text>
      <Text style={styles.text}>Förväntad temperatur: {pkg.ExpectedTempMin}° - {pkg.ExpectedTempMax}°</Text>
      <Text style={styles.text}>Förväntad luftfuktighet: {pkg.ExpectedHumidityMin}% - {pkg.ExpectedHumidityMax}%</Text>
      <Text style={styles.text}>Status: {pkg.Status} @ {new Date(pkg.StatusTime).toLocaleString()}</Text>
    </View>
  );
};

export default PackageObject;

const styles = StyleSheet.create({
  header: {
    color: colors.black,
    fontSize: 20,
    fontWeight: 'bold'
  },
  text: {
    color: colors.black,
  },
  container: {
    backgroundColor: colors.white,
    padding: 10,
    margin: 10,
    borderRadius: 10,
    borderWidth: 5,
    borderColor: colors.lightblue,
    width: "100%",
    justifyContent: "center"
  },
  index: {
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 5,
    color: colors.clearblue,
  }
});
