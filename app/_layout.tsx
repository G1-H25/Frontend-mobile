import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ActivityIndicator } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { useEffect, useState } from 'react';

import * as Font from 'expo-font';

export default function RootLayout() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    const loadFonts = async () => {
      await Font.loadAsync({
    'Figtree-Light': require("../assets/fonts/Figtree-Light.ttf"),
    'Figtree-Regular': require("../assets/fonts/Figtree-Regular.ttf"),
    'Figtree-Italic': require("../assets/fonts/Figtree-Italic.ttf"),
    'Figtree-Medium': require("../assets/fonts/Figtree-Medium.ttf"),
    'Figtree-Semibold': require("../assets/fonts/Figtree-SemiBold.ttf"),
    'Figtree-Bold': require("../assets/fonts/Figtree-Bold.ttf"),
    'Figtree-BoldItalic': require("../assets/fonts/Figtree-BoldItalic.ttf"),
    'Figtree-ExtraBold': require("../assets/fonts/Figtree-ExtraBold.ttf"),
    'Instruction-Regular': require("../assets/fonts/Instruction.otf"),
    'Instruction-Italic': require("../assets/fonts/Instruction-Italic.otf"),
    'Instruction-Bold': require("../assets/fonts/Instruction-Bold.otf"),
    'Instruction-BoldItalic': require("../assets/fonts/Instruction-Bold-Italic.otf"),
      });
      setFontsLoaded(true);
    };

    loadFonts();
  }, []);


  if (!fontsLoaded) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="small" />
      </View>
    );
  }


  return (
    <GestureHandlerRootView style={styles.container}>
      <Stack screenOptions={{ headerShown: false }}>
        {/* Root för tabs */}
        <Stack.Screen name="(tabs)" />
        {/* Fallback vid icke-matchande routes */}
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar style="dark" />
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1 },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default function RootLayout() 
  


