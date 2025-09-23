import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { ActivityIndicator } from "react-native-paper";
import { Package } from "../types/types";
import PackageObject from "./PackageObject";

// const API_URL = "http://84.216.139.251:3000/orders/";

const GetPackages: React.FC = () => {
  const API_URL = process.env.EXPO_PUBLIC_API_URL;
  // Loggar api-adress från .env (ändra till din lokala IP-adress i .env)
  // console.log(process.env.EXPO_PUBLIC_API_URL);
  

  const [packages, setPackages] = useState<Package[]>([]);
  const [error, setError] = useState<string | null>(null);

  const fetchPackages = async (): Promise<void> => {
    try {
      const response = await fetch(`${API_URL}orders`);
      if (!response.ok) {
        throw new Error(
          `Kunde ej hämta data från ${API_URL}, ${response.status}`
        );
      }

      const data: Package[] = await response.json();
      // loggar API respons
      //   console.log(data);

      setPackages(data);
    } catch (error) {
      if (error instanceof Error) {
        console.error("Fetch error", error.message);
        setError(error.message);
      } else {
        console.error("Unexpected error", error);
        setError("Unexpected error");
      }
    }
  };

  useEffect(() => {
    fetchPackages();
  }, []);

  return (
    <View style={styles.container}>
      <Text>
        {error ? (
          <Text>Error: {error}</Text>
        ) : packages.length === 0 ? (
          <ActivityIndicator />
        ) : (
          packages.map((pkg, i) => (
            <PackageObject key={pkg.OrderId} package={pkg} index={i + 1} />
          ))
        )}
      </Text>
    </View>
  );
};

export default GetPackages;

const styles = StyleSheet.create({
  container: {},
});
