import * as Location from 'expo-location';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

// HÄMTAR GPS-INFORMATION FRÅN TELEFON SOM SKA SKICKAS TILL BACKEND. KOMMER ATT GÖRA DETTA TILL EN ENKEL HJÄLPFUNKTION SENARE

type Props = {}

const ShowLocation = (props: Props) => {
     const [location, setLocation] = useState<Location.LocationObject | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

   useEffect(() => {
    async function getCurrentLocation() {
      
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    }

    getCurrentLocation();
  }, []);

  let text = 'Loading GPS';
  let longitude = '';
  let latitude = '';
  let timestamp = '';

  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    // text = JSON.stringify(location);
    text = '';
    longitude = 'Longitude: ' + location.coords.longitude;
    latitude = 'Latitude: ' + location.coords.latitude;
    timestamp = 'Timestamp: ' + new Date(location.timestamp).toLocaleString();

  }

  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>{text}</Text>
      <Text style={styles.paragraph}>{longitude}</Text>
      <Text style={styles.paragraph}>{latitude}</Text>
      <Text style={styles.paragraph}>{timestamp}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  paragraph: {
    fontSize: 18,
    textAlign: 'center',
    color: "white"
  },
});

export default ShowLocation;
