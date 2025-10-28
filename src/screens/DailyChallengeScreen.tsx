import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, ActivityIndicator, StyleSheet } from "react-native";
import { fetchDailyQuestions, saveDailyChallengeResult } from "../firebase/dailyChallengeFirestore";
import Storage from "../utils/storageHelper";

export default function DailyChallengeScreen({ navigation }: any) {
  const [questions, setQuestions] = useState<any[]>([]);
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [loading, setLoading] = useState(true);
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    const loadDailyQuiz = async () => {
      const today = new Date().toISOString().split("T")[0];
      const savedDate = await Storage.getItem("dailyDate");

      // if already done today
      if (savedDate === today) {
        setCompleted(true);
        setLoading(false);
        return;
      }

      const data = await fetchDailyQuestions(10);
      setQuestions(data);
      setLoading(false);
    };

    loadDailyQuiz();
  }, []);

  const handleAnswer = (option: string) => {
    if (selected) return; // prevent multiple clicks
    setSelected(option);

    if (option === questions[current].answer) {
      setScore(score + 1);
    }

    setTimeout(() => {
      if (current < questions.length - 1) {
        setCurrent(current + 1);
        setSelected(null);
      } else {
        finishChallenge();
      }
    }, 800);
  };

  const finishChallenge = async () => {
    const today = new Date().toISOString().split("T")[0];
    const yesterday = new Date(Date.now() - 86400000).toISOString().split("T")[0]; // subtract 1 day

    const lastPlayDate = await Storage.getItem("lastPlayDate");
    const currentStreak = parseInt((await Storage.getItem("streakCount")) || "0");

    let newStreak = 1; // default if first day or reset

    if (lastPlayDate === today) {
      newStreak = currentStreak; // already completed today
    } else if (lastPlayDate === yesterday) {
      newStreak = currentStreak + 1; // continued streak
    } else {
      newStreak = 1; // missed a day, reset streak
    }

    // Save new streak data
    await Storage.setItem("streakCount", newStreak.toString());
    await Storage.setItem("lastPlayDate", today);

    // Save today's challenge result
    await Storage.setItem("dailyDate", today);
    await Storage.setItem("dailyScore", score.toString());
    await saveDailyChallengeResult("guest", score, questions.length);

    setCompleted(true);
  };

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#2563eb" />
        <Text>Loading Daily Challenge...</Text>
      </View>
    );
  }

  if (completed) {
    const [savedScore, setSavedScore] = useState<string | null>(null);
    useEffect(() => {
        const getSavedScore = async () => {
            const score = await Storage.getItem("dailyScore");
            setSavedScore(score);
        }
        getSavedScore();
    }, []);
    
    const today = new Date().toISOString().split("T")[0];
    return (
      <View style={styles.center}>
        <Text style={styles.title}>🏆 Daily Challenge Completed</Text>
        <Text style={styles.subtitle}>
          You already took today's challenge on {today}.
        </Text>
        <Text style={styles.subtitle}>Your Score: {savedScore}/10</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Dashboard")}
        >
          <Text style={styles.buttonText}>📊 Go to Dashboard</Text>
        </TouchableOpacity>
      </View>
    );
  }

  const q = questions[current];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🔥 Daily Challenge</Text>
      <Text style={styles.subtitle}>
        Question {current + 1} of {questions.length}
      </Text>

      <View style={styles.questionBox}>
        <Text style={styles.question}>{q.question}</Text>
      </View>

      {q.options.map((option: string, index: number) => (
        <TouchableOpacity
          key={index}
          onPress={() => handleAnswer(option)}
          style={[
            styles.option,
            selected === option && {
              backgroundColor: option === q.answer ? "#16a34a" : "#dc2626",
            },
          ]}
        >
          <Text style={styles.optionText}>{option}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#f9fafb" },
  center: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { fontSize: 24, fontWeight: "bold", color: "#1e3a8a", marginBottom: 10 },
  subtitle: { fontSize: 16, color: "#334155", marginBottom: 20 },
  questionBox: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 16,
    marginBottom: 16,
  },
  question: { fontSize: 18, fontWeight: "500", color: "#0f172a" },
  option: {
    backgroundColor: "#2563eb",
    padding: 12,
    borderRadius: 10,
    marginBottom: 10,
  },
  optionText: { color: "#fff", fontSize: 16, textAlign: "center" },
  button: {
    backgroundColor: "#2563eb",
    padding: 12,
    borderRadius: 10,
    marginTop: 30,
  },
  buttonText: { color: "#fff", fontSize: 16, fontWeight: "bold" },
});
