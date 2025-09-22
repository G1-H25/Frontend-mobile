// components/PackageItem.tsx
import React from "react";
import { View, Text, StyleSheet } from "react-native";

type PackageItemProps = {
  id: string;
  name: string;
  weight: number;
  from: string;
  destination: string;
  index?: number;
};

const PackageItem = ({ id, name, weight, from, destination, index }: PackageItemProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>ID: {id}</Text>
      <Text style={styles.text}>Name: {name}</Text>
      <Text style={styles.text}>Weight: {weight} kg</Text>
      <Text style={styles.text}>From: {from}</Text>
      <Text style={styles.text}>Destination: {destination}</Text>
    </View>
  );
};

export default PackageItem;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginVertical: 5,
    backgroundColor: "#fff",
    borderRadius: 8,
    width: "90%",
    alignSelf: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  index: { fontWeight: "bold", marginBottom: 5 },
  header: { fontSize: 16, fontWeight: "600", marginBottom: 3 },
  text: { fontSize: 14 },
});
