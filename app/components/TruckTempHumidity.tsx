import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useAuth } from "../context/AuthContext";
import colors from "../theme/colors";

type SensorTemperature = {
  sensorId: number;
  gatewayId: number;
  polledAt: string;
  temperatureCel: number;
};

type SensorHumidity = {
  sensorId: number;
  gatewayId: number;
  polledAt: string;
  humidityPct: number;
};

const TruckTempHumidity = () => {
  const API_URL = process.env.EXPO_PUBLIC_AZURE_API_URL;
  const { token } = useAuth();
  const [temp, setTemp] = useState<number | null>(null);
  const [humid, setHumid] = useState<number | null>(null);

  useEffect(() => {
    if (!token) return;

    const fetchTemperature = async () => {
      try {
        const response = await fetch(
          `${API_URL}Sensor/sensor-temperature`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (!response.ok) throw new Error("Failed to fetch temperature");
        const data: SensorTemperature[] = await response.json();

        if (data.length > 0) setTemp(data[0].temperatureCel);
      } catch (error) {
        console.error("Error fetching temperature:", error);
      }
    };

    const fetchHumidity = async () => {
      try {
        const response = await fetch(
          `${API_URL}Sensor/sensor-humidity`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (!response.ok) throw new Error("Failed to fetch humidity");
        const data: SensorHumidity[] = await response.json();

        if (data.length > 0) setHumid(data[0].humidityPct);
      } catch (error) {
        console.error("Error fetching humidity:", error);
      }
    };

    fetchTemperature();
    fetchHumidity();
  }, [token]);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Kylutrymme</Text>
      <Text style={styles.text}>
        {humid !== null ? `Luftfuktighet: ${humid}%` : "Laddar luftfuktighet..."}
      </Text>
      <Text style={styles.text}>
        {temp !== null ? `Temperatur: ${temp}°C` : "Laddar temperatur..."}
      </Text>
    </View>
  );
};

export default TruckTempHumidity;

const styles = StyleSheet.create({
  container: {
    padding: 12,
    zIndex: 100,
    backgroundColor: colors.brightopacity,
  },
  header: {
    color: colors.clearblue,
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 6,
  },
  text: {
    color: colors.darkblue,
    fontSize: 16,
    marginBottom: 2,
  },
});
