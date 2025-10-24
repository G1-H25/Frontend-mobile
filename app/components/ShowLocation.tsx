import { Ionicons } from '@expo/vector-icons'; // built-in icon set in Expo
import * as Linking from 'expo-linking';
import * as Location from 'expo-location';
import { useEffect, useState } from 'react';
import { ActivityIndicator, Platform, Pressable, StyleSheet, View } from 'react-native';
import colors from '../theme/colors';

type Props = {}

const ShowLocation = (props: Props) => {
  const [location, setLocation] = useState<Location.LocationObject | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getCurrentLocation() {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        setLoading(false);
        return;
      }

      let loc = await Location.getCurrentPositionAsync({});
      setLocation(loc);
      setLoading(false);
    }

    getCurrentLocation();
  }, []);

  const openMap = () => {
    if (!location) return;
    const { latitude, longitude } = location.coords;

    // works for both Android (Google Maps) and iOS (Apple Maps)
    const url = Platform.select({
      ios: `http://maps.apple.com/?ll=${latitude},${longitude}`,
      android: `geo:${latitude},${longitude}?q=${latitude},${longitude}`,
    });

    Linking.openURL(url!);
  };

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color={colors.lightblue} />
      </View>
    );
  }

  if (errorMsg) {
    return (
      <View style={styles.container}>
        <Ionicons name="alert-circle-outline" size={30} color="red" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Pressable onPress={openMap}>
        <Ionicons name="locate-outline" size={30} color={colors.clearblue}/>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: colors.brightopacity,
    elevation: 5,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-end',
    width: 40,
    height: 40,
    backgroundColor: colors.brightopacity,
  },
});

export default ShowLocation;
