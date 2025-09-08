import React, { ReactNode } from 'react';
import { StyleSheet, View, ImageBackground } from 'react-native';
import { colors } from '../theme/colors';

type BackgroundProps = {
  children: ReactNode;
};

const Background2 = ({ children }: BackgroundProps) => {
  return (
    <View style={styles.Background}>
      <ImageBackground
        source={require('../../assets/images/background_line-03.png')}
        style={{ flex: 1, resizeMode: 'cover' }}
      >
        {children}
      </ImageBackground>
    </View>
  );
};

export default Background2;

const styles = StyleSheet.create({
  Background: {
    flex: 1,
    backgroundColor: colors.darkblue,
    marginTop: 30
  },
});