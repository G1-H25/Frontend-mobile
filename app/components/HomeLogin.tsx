import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useUser } from '../../context/UserContext';
import { useRouter } from 'expo-router';
import { colors } from '../theme/colors';

export default function HomeLogin() {
  const { user, logout } = useUser();
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.replace('/login');
  };

  return (
    <View style={styles.container}>
      {user ? (
        <>
          <Text style={styles.title}>Hej {user.name}</Text>
          <Text style={styles.subtitle}>{user.email}</Text>
          <Button title="Logga ut" onPress={handleLogout} />
        </>
      ) : (
        <>
          <Text style={styles.title}>Ingen användare inloggad</Text>
          <Button title="Tillbaka till login" onPress={() => router.replace('/login')} />
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center',
    backgroundColor: colors.clearblue,
  },
  title: { 
    fontSize: 22, 
    fontFamily: 'Figtree-Bold', 
    marginBottom: 8 
  },
  subtitle: { 
    fontSize: 16, 
    color: colors.darkblue, 
    marginBottom: 20 
  },
});
