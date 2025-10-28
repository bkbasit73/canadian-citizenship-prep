import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { fetchQuestions } from "../firebase/questionsFirestore";
import { saveUserResult } from "../firebase/userResultsFirestore";

type Question = {
  id: string;
  question: string;
  options: string[];
  answer: string;
  category: string;
};

export default function QuizScreen({ navigation }: any) {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [showFeedback, setShowFeedback] = useState(false);

  useEffect(() => {
    const load = async () => {
      const data = await fetchQuestions();
      setQuestions(data as Question[]);
    };
    load();
  }, []);

  if (questions.length === 0) {
    return (
      <View style={styles.center}>
        <Text>Loading questions...</Text>
      </View>
    );
  }

  const q = questions[current];

  const handleSelect = (option: string) => {
    setSelected(option);
    setShowFeedback(true);
    if (option === q.answer) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNext = async () => {
    if (current < questions.length - 1) {
      setCurrent(current + 1);
      setSelected(null);
      setShowFeedback(false);
    } else {
      await saveUserResult("guest", score, questions.length);
      navigation.navigate("Dashboard", { score, total: questions.length });
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🧠 Practice Mode</Text>
      <Text style={styles.progress}>
        Question {current + 1} / {questions.length}
      </Text>

      <Text style={styles.question}>{q.question}</Text>

      {q.options.map((option, index) => {
        const isCorrect = option === q.answer;
        const isSelected = option === selected;
        let bgColor = "#2563eb";

        if (showFeedback && isSelected) {
          bgColor = isCorrect ? "#16a34a" : "#dc2626"; // green/red feedback
        }

        return (
          <TouchableOpacity
            key={index}
            style={[styles.option, { backgroundColor: bgColor }]}
            onPress={() => handleSelect(option)}
            disabled={showFeedback}
          >
            <Text style={styles.optionText}>{option}</Text>
          </TouchableOpacity>
        );
      })}

      {showFeedback && (
        <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
          <Text style={styles.nextText}>
            {current < questions.length - 1 ? "Next →" : "View Results"}
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f8fafc", padding: 20 },
  center: { flex: 1, alignItems: "center", justifyContent: "center" },
  title: { fontSize: 22, fontWeight: "bold", color: "#1e3a8a", marginBottom: 10 },
  progress: { fontSize: 16, color: "#475569", marginBottom: 20 },
  question: { fontSize: 18, color: "#111827", marginBottom: 15 },
  option: {
    backgroundColor: "#2563eb",
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
  },
  optionText: { color: "#fff", fontSize: 16, textAlign: "center" },
  nextButton: {
    backgroundColor: "#1e3a8a",
    padding: 12,
    borderRadius: 10,
    marginTop: 20,
    alignItems: "center",
  },
  nextText: { color: "#fff", fontWeight: "bold", fontSize: 16 },
});