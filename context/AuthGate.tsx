import React, { useEffect } from 'react';
import { useSegments, useRouter } from 'expo-router';
import { useUser } from './UserContext';
import { ActivityIndicator, View } from 'react-native';

export const AuthGate = ({ children }: { children: React.ReactNode }) => {
  const { user, loading } = useUser();
  const segments = useSegments();
  const router = useRouter();

  useEffect(() => {
    if (loading) return; // vänta tills användaren laddats

    const inAuthGroup = segments[0] === 'login';

    if (!user && !inAuthGroup) {
      router.replace('/login');
    } else if (user && inAuthGroup) {
      router.replace('/home');
    }
  }, [user, segments, loading, router]);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#007AFF" />
      </View>
    );
  }

  return <>{children}</>;
};
