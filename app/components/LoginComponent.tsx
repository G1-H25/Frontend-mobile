import React, { useState } from "react";
import { View, Text, Button, StyleSheet, TextInput, KeyboardAvoidingView, Platform } from "react-native";
import { useUser } from "../../context/UserContext";
import { useRouter } from "expo-router";
import { colors } from "../theme/colors";

export default function LoginComponent() {
  const { login } = useUser();
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleLogin = async () => {
    if (!name.trim() || !email.trim()) return alert("Fyll i namn och e-post!");
    
    await login({ id: Date.now().toString(), name, email });
    router.replace("/home");
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <Text style={styles.title}>Logga in</Text>

      <TextInput
        style={styles.input}
        placeholder="Namn"
        placeholderTextColor="#666"
        value={name}
        onChangeText={setName}
      />

      <TextInput
        style={styles.input}
        placeholder="E-post"
        placeholderTextColor="#666"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <View style={styles.buttonContainer}>
        <Button title="Logga in" color={colors.darkblue} onPress={handleLogin} />
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: "center", 
    alignItems: "center",
    padding: 20,
    backgroundColor: colors.lightblue,
  },
  title: { 
    fontSize: 24, 
    marginBottom: 20,
    color: colors.bright,
    fontFamily: "Figtree-Semibold",
  },
  input: {
    width: "100%",
    padding: 12,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    backgroundColor: "#fff",
    marginBottom: 12,
    fontSize: 16,
  },
  buttonContainer: {
    width: "100%",
    marginTop: 10,
  },
});
