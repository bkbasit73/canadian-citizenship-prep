import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, ActivityIndicator } from "react-native";
import { fetchUserResult } from "../firebase/userResultsFirestore";
import { saveUserProgress, fetchUserData } from "../firebase/firestoreService";
import Storage from "../utils/storageHelper";
import BadgePopup from "../components/BadgePopup";

import { getBadgeName, getBadgeDescription, getBadgeColor, getNextBadgeTarget } from "../utils/badgeUtils";

export default function DashboardScreen({ navigation }: any) {
  const [stats, setStats] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [streak, setStreak] = useState<number>(0);
  const [badgeVisible, setBadgeVisible] = useState(false);
  const [currentBadge, setCurrentBadge] = useState("");
  const [currentMessage, setCurrentMessage] = useState("");

  useEffect(() => {
    const loadStats = async () => {
      const data = await fetchUserResult("guest");
      setStats(data);

      const storedStreak = await Storage.getItem("streakCount");
      const streakValue = storedStreak ? parseInt(storedStreak) : 0;
      setStreak(streakValue);

      // Check if a new badge was earned
      const lastBadge = await Storage.getItem("lastBadge");
      const newBadge = getBadgeName(streakValue);

      if (newBadge !== lastBadge && streakValue > 0) {
        setCurrentBadge(newBadge);
        setCurrentMessage(getBadgeDescription(streakValue));
        setBadgeVisible(true);

        // Save this badge so popup shows only once
        await Storage.setItem("lastBadge", newBadge);

        // Hide popup after 5 seconds
        setTimeout(() => setBadgeVisible(false), 5000);
      }

      setLoading(false);
    };
    loadStats();
  }, []);

  useEffect(() => {
    const syncData = async () => {
      const userId = "guest"; // or use user.uid if you add login later
      await saveUserProgress(userId, streak, getBadgeName(streak));
    };
    if (streak > 0) syncData();
  }, [streak]);

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#2563eb" />
        <Text>Loading performance data...</Text>
      </View>
    );
  }

  if (!stats) {
    return (
      <View style={styles.center}>
        <Text>No performance data found.</Text>
      </View>
    );
  }

  const accuracy =
    stats.totalQuestions > 0
      ? ((stats.totalCorrect / stats.totalQuestions) * 100).toFixed(1)
      : 0;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>📊 Dashboard</Text>

      <View style={styles.card}>
        <Text style={styles.label}>Total Quizzes Taken</Text>
        <Text style={styles.value}>{stats.totalQuizzes}</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Total Questions Answered</Text>
        <Text style={styles.value}>{stats.totalQuestions}</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Correct Answers</Text>
        <Text style={styles.value}>{stats.totalCorrect}</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Accuracy Rate</Text>
        <Text style={[styles.value, { color: "#16a34a" }]}>{accuracy}%</Text>
      </View>

      <View
        style={[
          styles.card,
          { borderLeftWidth: 6, borderLeftColor: getBadgeColor(streak) },
        ]}
      >
        <Text style={styles.label}>🔥 Daily Streak</Text>
        <Text style={[styles.value, { color: "#f97316" }]}>{streak} days</Text>

        {/* Badge Section */}
        <View style={{ marginTop: 8 }}>
          <Text style={{ fontSize: 16, fontWeight: "600", color: "#1e3a8a" }}>
            {getBadgeName(streak)}
          </Text>
          <Text style={{ fontSize: 14, color: "#475569" }}>
            {getBadgeDescription(streak)}
          </Text>

          <View
            style={{
              height: 8,
              width: "100%",
              backgroundColor: "#e2e8f0",
              borderRadius: 4,
              marginTop: 8,
            }}
          >
            <View
              style={{
                height: 8,
                width: `${Math.min((streak / getNextBadgeTarget(streak)) * 100, 100)}%`,
                backgroundColor: getBadgeColor(streak),
                borderRadius: 4,
              }}
            />
          </View>
          <Text style={{ fontSize: 12, color: "#64748b", marginTop: 4 }}>
            {Math.min(streak, getNextBadgeTarget(streak))} / {getNextBadgeTarget(streak)} days to next badge
          </Text>
        </View>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Quiz")}
      >
        <Text style={styles.buttonText}>🧠 Start New Quiz</Text>
      </TouchableOpacity>

      <BadgePopup
        badge={currentBadge}
        message={currentMessage}
        visible={badgeVisible}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f8fafc", padding: 20 },
  center: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#1e3a8a",
    marginBottom: 20,
    textAlign: "center",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 16,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  label: { fontSize: 16, color: "#334155" },
  value: { fontSize: 20, fontWeight: "bold", color: "#1e3a8a" },
  button: {
    backgroundColor: "#2563eb",
    padding: 12,
    borderRadius: 10,
    marginTop: 30,
    alignItems: "center",
  },
  buttonText: { color: "#fff", fontSize: 16, fontWeight: "bold" },
});