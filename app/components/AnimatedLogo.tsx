import { StyleSheet, Animated, Easing } from 'react-native';
import React, { useEffect, useRef } from 'react';

const AnimatedLogo: React.FC = () => {
  const scale = useRef(new Animated.Value(1)).current; // Startvärde = normal storlek

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(scale, {
          toValue: 1.1,
          duration: 1000,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
        Animated.timing(scale, {
          toValue: 1,
          duration: 1000,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, [scale]);

  return (
    <Animated.Image
      source={require("../../assets/logos/logo-trackpack-1.png")}
      style={[
        styles.logo,
        { transform: [{ scale }] }
      ]}
    />
  );
};

export default AnimatedLogo;

const styles = StyleSheet.create({
  logo: {
    width: 180,
    height: 180,
    resizeMode: 'contain',
  },
});