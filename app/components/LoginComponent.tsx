import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { useUser } from "../../context/UserContext"; 
import { useRouter } from "expo-router";

export default function LoginComponent() {
  const { login } = useUser();
  const router = useRouter();

  const handleLogin = () => {
    login({ 
        id: "1", 
        name: "Anna Andersson", 
        email: "anna@example.com" 
    });
    router.replace("/home");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Logga in</Text>
      <Button title="Logga in" onPress={handleLogin} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: "center", 
    alignItems: "center" 
},
  title: { 
    fontSize: 24, 
    marginBottom: 20 
},
});
