import React, { ReactNode } from 'react';
import { StyleSheet, View, ImageBackground } from 'react-native';
import { colors } from '../theme/colors';

type BackgroundProps = {
  children: ReactNode;
};

const BackgroundLong = ({ children }: BackgroundProps) => {
  return (
    <View style={styles.Background}>
      <ImageBackground
        source={require('../../assets/images/background_line-05.png')}
        style={{ flex: 1, resizeMode: 'cover' }}
      >
        {children}
      </ImageBackground>
    </View>
  );
};

export default BackgroundLong;

const styles = StyleSheet.create({
  Background: {
    flex: 1,
    backgroundColor: colors.darkblue,
    marginTop: 30
  },
});