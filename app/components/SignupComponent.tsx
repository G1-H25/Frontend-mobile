import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  ActivityIndicator,
  StyleSheet,
  Alert,
} from "react-native";
import { colors } from "../theme/colors";
import { useUser } from "../../context/UserContext";
import { useRouter } from "expo-router";

export default function SignupComponent() {
  const { login } = useUser();
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user");
  const [companyId, setCompanyId] = useState<number>(0);
  const [loading, setLoading] = useState(false);

  const API_BASE =
    "https://g1api-bgeuc6hydmg9etgt.swedencentral-01.azurewebsites.net";

  const handleSignup = async () => {
    if (!username || !password) {
      Alert.alert("Fel", "Ange användarnamn och lösenord");
      return;
    }

    setLoading(true);

    try {
      // 🔹 Steg 1: Registrera användare
      const signupResponse = await fetch(`${API_BASE}/Signup`, {
        method: "POST",
        headers: {
          Accept: "*/*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
          role,
          companyId,
        }),
      });

      if (!signupResponse.ok) {
        const msg = await signupResponse.text();
        throw new Error(msg || "Registrering misslyckades");
      }

      // 🔹 Steg 2: Logga in direkt
      const loginResponse = await fetch(`${API_BASE}/Login`, {
        method: "POST",
        headers: {
          Accept: "*/*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });

      if (!loginResponse.ok) {
        const msg = await loginResponse.text();
        throw new Error(msg || "Inloggning misslyckades efter registrering");
      }

      const loginData = await loginResponse.json();

      // 🔹 Antag att API returnerar { token, role, companyId }
      const userData = {
        username,
        role: loginData.role || role,
        companyId: loginData.companyId || companyId,
        token: loginData.token,
      };

      await login(userData);

      Alert.alert("Konto skapat!", "Du är nu inloggad ✅");

      // 🔹 Steg 3: Navigera till hem
      router.replace("/home");
    } catch (error: any) {
      console.error("Signup/Login error:", error);
      Alert.alert("Fel", error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registrera dig</Text>

      <TextInput
        style={styles.input}
        placeholder="Användarnamn"
        value={username}
        onChangeText={setUsername}
        autoCapitalize="none"
      />

      <TextInput
        style={styles.input}
        placeholder="Lösenord"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <TextInput
        style={styles.input}
        placeholder="Roll (ex. user)"
        value={role}
        onChangeText={setRole}
      />

      <TextInput
        style={styles.input}
        placeholder="Company ID (t.ex. 0)"
        keyboardType="numeric"
        value={companyId.toString()}
        onChangeText={(t) => setCompanyId(Number(t))}
      />

      {loading ? (
        <ActivityIndicator color={colors.darkblue} />
      ) : (
        <Button title="Registrera konto" onPress={handleSignup} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lightblue,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 22,
    color: colors.bright,
    marginBottom: 20,
    fontFamily: "Figtree-Bold",
  },
  input: {
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 12,
    fontSize: 16,
    marginBottom: 10,
  },
});
