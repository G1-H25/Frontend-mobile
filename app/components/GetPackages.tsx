import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "expo-router";
import React, { useCallback, useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { ActivityIndicator } from "react-native-paper";
import { Package } from "../types/types";
import PackageObject from "./PackageObject";

const GetPackages: React.FC = () => {
  const [packages, setPackages] = useState<Package[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadScannedPackages = async () => {
    try {
      const stored = await AsyncStorage.getItem("scannedData");
      if (stored) {
        const parsed: Package[] = JSON.parse(stored);
        setPackages(Array.isArray(parsed) ? parsed : []);
      } else {
        setPackages([]);
      }
    } catch (err: any) {
      console.error(err.message);
      setError("Couldnt load scanned packages");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadScannedPackages();
  }, []);

  useFocusEffect(
    useCallback(() => {
      loadScannedPackages();
    }, [])
  );

  if (loading) {
    return (
      <View>
        <ActivityIndicator />
      </View>
    );
  }

  if (packages.length === 0) {
    return (
      <View>
        <Text>No scanned packages found</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text>
        {error ? (
          <Text>Error: {error}</Text>
        ) : packages.length === 0 ? (
          <ActivityIndicator />
        ) : (
          packages.map((pkg, i) => (
            <PackageObject key={pkg.sändningsnr} package={pkg} index={i + 1} />
          ))
        )}
      </Text>
    </View>
  );
};

export default GetPackages;

const styles = StyleSheet.create({
  container: {
    margin: 15,
  },
});
