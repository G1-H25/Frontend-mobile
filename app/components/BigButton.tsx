import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { colors } from '../theme/colors';

type BigButtonProps = {
    title: string;
};

const BigButton = ({title}: BigButtonProps) => {
  return (<>
    <TouchableOpacity style={styles.button}><Text style={styles.buttontext}>{title}</Text></TouchableOpacity>
    </>
  )
}

export default BigButton

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.buttonblue,
        padding: 14,
        borderRadius: 12,
        width: '80%',
        alignSelf: 'center',
        marginTop: 20,
    },
    buttontext: {
        color: colors.clearblue,
        alignSelf: 'center',
        fontSize: 20,
        fontWeight: "600",
        letterSpacing: 0.5,
        fontFamily: "Figtree-Regular",
    }
})