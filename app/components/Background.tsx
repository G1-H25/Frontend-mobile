import React, { ReactNode } from 'react';
import { StyleSheet, View, ImageBackground } from 'react-native';
import { colors } from '../theme/colors';

type BackgroundProps = {
  children: ReactNode;
};

const Background = ({ children }: BackgroundProps) => {
  return (
    <View style={styles.Background}>
      <ImageBackground
        source={require('../../assets/images/background_line-04.png')}
        style={{ flex: 1, resizeMode: 'cover' }}
      >
        {children}
      </ImageBackground>
    </View>
  );
};

export default Background;

const styles = StyleSheet.create({
  Background: {
    flex: 1,
    backgroundColor: colors.darkblue,
    marginTop: 30
  },
});