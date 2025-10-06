// components/ScannedItem.tsx
import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { colors } from "../theme/colors";
import PackageItem from "./PackageItem";

type PackageType = {
  id: string;
  name: string;
  weight: number;
  from: string;
  destination: string;
};

const ScannedItem: React.FC = () => {
  const [latestPackage, setLatestPackage] = useState<PackageType | null>(null);

  // Funktion för att hämta senaste paketet
  const fetchLatest = async () => {
    try {
      const stored = await AsyncStorage.getItem("scannedData");
      if (stored) {
        const parsed: PackageType[] = JSON.parse(stored);
        if (parsed.length > 0) {
          setLatestPackage(parsed[parsed.length - 1]);
        }
      } else {
        setLatestPackage(null);
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    // Kör en gång när komponenten mountas
    fetchLatest();

    // Skapa ett interval för att kolla AsyncStorage varje sekund
    const interval = setInterval(fetchLatest, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <View>
      {!latestPackage ? (
        <Text style={styles.noItems}>No items scanned</Text>
      ) : (
        <PackageItem
          id={latestPackage.id}
          name={latestPackage.name}
          weight={latestPackage.weight}
          from={latestPackage.from}
          destination={latestPackage.destination}
          index={1}
        />
      )}
    </View>
  );
};

export default ScannedItem;

const styles = StyleSheet.create({
  noItems: {
    fontSize: 16,
    color: colors.darkblue,
    fontStyle: "italic",
    marginVertical: 20,
    textAlign: "center",
  },
});
