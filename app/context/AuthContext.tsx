// AuthContext.tsx
import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { createContext, useContext, useEffect, useState } from "react";
import { Alert } from "react-native";

type User = {
  username: string;
  // add other user fields if your API returns them
};

type AuthState = {
  user: User | null;
  token: string | null;
  loading: boolean;
  error: string | null;
};

type AuthContextType = AuthState & {
  logout: () => Promise<void>;
};

const AUTH_TOKEN_KEY = "@myapp_auth_token";
const AUTH_USER_KEY = "@myapp_auth_user";

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const HARD_CODED_USERNAME = process.env.EXPO_PUBLIC_USERNAME;
  const HARD_CODED_PASSWORD = process.env.EXPO_PUBLIC_PASSWORD;
  const API_URL = process.env.EXPO_PUBLIC_AZURE_API_URL;

  const login = async () => {
    try {
      const res = await fetch(
        `${API_URL}Login`,
        {
          method: "POST",
          headers: {
            Accept: "*/*",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: HARD_CODED_USERNAME,
            password: HARD_CODED_PASSWORD,
          }),
        }
      );

      if (!res.ok) {
        const text = await res.text();
        throw new Error(text || `HTTP ${res.status}`);
      }

      const data = await res.json();
      const receivedToken = data.token ?? data.accessToken ?? null;
      const receivedUser = data.user ?? { username: HARD_CODED_USERNAME };

      if (!receivedToken) {
        throw new Error("No token returned from server");
      }

      setToken(receivedToken);
      setUser(receivedUser);
      

      await AsyncStorage.setItem(AUTH_TOKEN_KEY, receivedToken);
      await AsyncStorage.setItem(AUTH_USER_KEY, JSON.stringify(receivedUser));

    } catch (err: any) {
      console.error("Auto-login failed:", err);
      setError(err?.message ?? "Auto-login failed");
      Alert.alert("Login failed", err?.message ?? "Auto-login failed");
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    setLoading(true);
    try {
      setToken(null);
      setUser(null);
      await AsyncStorage.removeItem(AUTH_TOKEN_KEY);
      await AsyncStorage.removeItem(AUTH_USER_KEY);
    } catch (err) {
      console.warn("Logout error:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    (async () => {
      try {
        const savedToken = await AsyncStorage.getItem(AUTH_TOKEN_KEY);
        const savedUserJson = await AsyncStorage.getItem(AUTH_USER_KEY);

        if (savedToken && savedUserJson) {
          setToken(savedToken);
          setUser(JSON.parse(savedUserJson));
        } else {
          await login();
        }
      } catch (e) {
        console.warn("Failed to restore auth state:", e);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        loading,
        error,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return ctx;
};
