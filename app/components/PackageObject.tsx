import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { colors } from "../theme/colors";

type PackageObjectProps = {
  id: string;
  name: string;
  weight: number;
  from: string;
  destination: string;
};

const PackageObject = ({
  id,
  name,
  weight,
  from,
  destination,
}: PackageObjectProps) => {
  return (
      <View style={styles.container}>
        <Text style={styles.header}>ID nr {id}</Text>
        <Text style={styles.text}>Name: {name}</Text>
        <Text style={styles.text}>Weight: {weight} kg</Text>
        <Text style={styles.text}>From: {from}</Text>
        <Text style={styles.text}>Destination: {destination}</Text>
      </View>  
  );
};

export default PackageObject;

const styles = StyleSheet.create({
  header: {
    color: colors.black,
    fontSize: 20,
    fontWeight: 'bold',
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
  },
});
