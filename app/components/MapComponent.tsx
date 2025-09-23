import * as Location from "expo-location";
import React, { useEffect, useState } from "react";
import { Image, StyleSheet } from "react-native";
import MapView, { Marker, Region } from "react-native-maps";
import { FAB } from 'react-native-paper';
import { colors } from "../theme/colors";
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const MapComponent = () => {
  const [position, setPosition] = useState<Region>({
  latitude: 59.3293,
  longitude: 18.0686,
  latitudeDelta: 0.0421,
  longitudeDelta: 0.0421,
});

  useEffect(() => {
    (async () => {
      // Be om tillstånd
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.log("Permission to access location was denied");
        return;
      }

      // Hämta position
      const location = await Location.getCurrentPositionAsync({});
      setPosition({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.0421,
        longitudeDelta: 0.0421,
      });
    })();
  }, []);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <MapView
        style={styles.map}
        region={position}
        showsUserLocation={true}
        showsMyLocationButton={true}
        followsUserLocation={true}
        showsCompass={true}
        scrollEnabled={true}
        zoomEnabled={true}
        pitchEnabled={true}
        rotateEnabled={true}
      >
        <Marker
          title="You are here"
          description="This is your current location."
          coordinate={position}
        >  
        <Image 
    source={require('../../assets/images/pin-blue-3.png')}
    style={styles.markerImage}
  />
        </Marker>
      </MapView>
      <FAB
        style={{
          position: 'absolute',
          margin: 16,
          right: 130,
          bottom: 10,
          zIndex: 1,
          backgroundColor: colors.bright,
          borderColor: colors.lightblue,
          borderWidth: 4,
        }}
        small
        icon="crosshairs-gps"
        label="Locate me"
        onPress={() => {
          (async () => {
            const location = await Location.getCurrentPositionAsync({});
            setPosition({
              latitude: location.coords.latitude,
              longitude: location.coords.longitude,
              latitudeDelta: 0.0421,
              longitudeDelta: 0.0421,
            });
          })();
        }}
      />
    </GestureHandlerRootView>
  );
};

export default MapComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1, // viktigt för att kartan ska fylla skärmen
    justifyContent: "center", 
  },
  map: {
    flex: 1,
    margin: 40,
    borderRadius: 10,
  },
  markerImage: {
    width: 35,
    height: 60,
},
});
