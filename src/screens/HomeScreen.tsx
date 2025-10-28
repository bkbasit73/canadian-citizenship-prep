import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function HomeScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>🇨🇦 Canadian Citizenship Prep</Text>
      <Text style={styles.subtitle}>Learn, Practice, and Track Your Progress</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Quiz")}
      >
        <Text style={styles.buttonText}>🧠 Practice Mode</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Study")}
      >
        <Text style={styles.buttonText}>📘 Study Mode</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Dashboard")}
      >
        <Text style={styles.buttonText}>📊 View Dashboard</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("DailyChallenge")}>
        <Text style={{ fontSize: 18, color: "#2563eb", marginTop: 20 }}>🔥 Daily Challenge</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("TrophyGallery")}>
        <Text style={{ fontSize: 18, color: "#2563eb", marginTop: 20 }}>🏆 Trophy Gallery</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("AnytimePlay")}>
        <Text style={{ fontSize: 18, color: "#2563eb", marginTop: 20 }}>🎮 Anytime Play</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f7f9fc",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#1e3a8a",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: "#475569",
    marginBottom: 30,
    textAlign: "center",
  },
  button: {
    backgroundColor: "#2563eb",
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 10,
    marginVertical: 8,
    width: "80%",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center",
  },
});