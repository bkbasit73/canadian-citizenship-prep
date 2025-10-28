// src/screens/AnytimePlayScreen.tsx
import React, { useEffect, useMemo, useRef, useState } from "react";
import { View, Text, Pressable, Alert, ScrollView, StyleSheet } from "react-native";

// Load JSON via Metro (works without extra tsconfig)
type Q = {
  id: number;
  type: "mcq" | "truefalse";
  question: string;
  options?: string[];
  answer: string;
  explanation: string;
  topic: string;
};

// IMPORTANT: the path below matches assets/data/questions.json
const questions: Q[] = require("../../assets/data/questions.json");

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function AnytimePlayScreen({ route }: any) {
  // Optional: start from a topic (e.g., route.params?.topic)
  const topicFilter = route?.params?.topic as string | undefined;

  const [mode, setMode] = useState<"timed" | "practice">("timed");
  const [seconds, setSeconds] = useState(60);
  const [idx, setIdx] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [lives, setLives] = useState(3);
  const [picked, setPicked] = useState<string | null>(null);
  const [streak, setStreak] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const pool: Q[] = useMemo(() => {
    const base = questions;
    const filtered = topicFilter ? base.filter(q => q.topic === topicFilter) : base;
    return shuffle(filtered).slice(0, 50); // number of questions per run
  }, [topicFilter]);

  const q = pool[idx];
  const answers = q?.type === "mcq" && q.options ? shuffle(q.options) : ["True", "False"];

  // Timer
  useEffect(() => {
    if (mode === "timed") {
      if (timerRef.current) clearInterval(timerRef.current);
      timerRef.current = setInterval(() => setSeconds(s => Math.max(0, s - 1)), 1000);
    }
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [mode]);

  useEffect(() => {
    if (mode === "timed" && seconds === 0) {
      Alert.alert("Time!", `You scored ${correct}/${idx} • Best streak ${streak}`);
      reset();
    }
  }, [seconds, mode, correct, idx, streak]);

  function reset() {
    setIdx(0); setCorrect(0); setStreak(0); setLives(3); setSeconds(60); setPicked(null);
  }

  function pick(ans: string) {
    if (!q) return;
    setPicked(ans);
    const isRight = ans === q.answer;

    if (isRight) {
      setCorrect(c => c + 1);
      setStreak(s => s + 1);
      setTimeout(() => { setPicked(null); setIdx(i => Math.min(pool.length - 1, i + 1)); }, 450);
    } else {
      setStreak(0);
      setLives(l => Math.max(0, l - 1));
    }
  }

  useEffect(() => {
    if (lives === 0) {
      Alert.alert("Game over", `Score ${correct}/${idx}. Try again!`);
      reset();
    }
  }, [lives]);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.row}>
        <View style={styles.row}>
          <Pressable style={[styles.btn, mode === "timed" && styles.btnActive]} onPress={() => setMode("timed")}>
            <Text style={styles.btnText}>Timed</Text>
          </Pressable>
          <Pressable style={[styles.btn, mode === "practice" && styles.btnActive]} onPress={() => setMode("practice")}>
            <Text style={styles.btnText}>Practice</Text>
          </Pressable>
        </View>

        <View style={styles.badges}>
          <Text style={styles.badge}>❤️ {lives}</Text>
          <Text style={styles.badge}>✅ {correct}</Text>
          <Text style={styles.badge}>🔥 {streak}</Text>
          {mode === "timed" && <Text style={styles.badge}>⏱ {seconds}s</Text>}
        </View>
      </View>

      {!q ? (
        <Text>Loading…</Text>
      ) : (
        <View style={styles.card}>
          <Text style={styles.meta}>{idx + 1} / {pool.length} • {q.topic}</Text>
          <Text style={styles.question}>{q.question}</Text>

          <View style={{ gap: 10, marginTop: 10 }}>
            {answers.map((a) => {
              const right = picked && a === q.answer;
              const wrongPicked = picked && a === picked && a !== q.answer;
              return (
                <Pressable
                  key={a}
                  style={[
                    styles.choice,
                    right && { borderColor: "#10b981" },
                    wrongPicked && { borderColor: "#ef4444" },
                  ]}
                  onPress={() => pick(a)}
                  disabled={!!picked}
                >
                  <Text style={styles.choiceText}>{a}</Text>
                </Pressable>
              );
            })}
          </View>

          {picked && (
            <View style={styles.explainer}>
              <Text style={styles.explainerTitle}>
                {picked === q.answer ? "Correct!" : "Not quite."}
              </Text>
              <Text style={styles.explainerText}>{q.explanation}</Text>
              <Pressable style={styles.btn} onPress={() => { setPicked(null); setIdx(i => Math.min(pool.length - 1, i + 1)); }}>
                <Text style={styles.btnText}>Next</Text>
              </Pressable>
            </View>
          )}
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16, gap: 12 },
  row: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: 8 },
  btn: { paddingVertical: 10, paddingHorizontal: 14, borderRadius: 10, borderWidth: 1, borderColor: "#e5e7eb", backgroundColor: "#fff" },
  btnActive: { backgroundColor: "#f3f4f6" },
  btnText: { fontWeight: "600" },
  badges: { flexDirection: "row", gap: 8 },
  badge: { paddingVertical: 6, paddingHorizontal: 10, borderRadius: 999, borderWidth: 1, borderColor: "#e5e7eb", fontSize: 12 },
  card: { padding: 16, borderRadius: 12, borderWidth: 1, borderColor: "#e5e7eb", backgroundColor: "#fff", gap: 10 },
  meta: { color: "#6b7280", fontSize: 12 },
  question: { fontSize: 20, fontWeight: "700" },
  choice: { padding: 12, borderRadius: 12, borderWidth: 1, borderColor: "#e5e7eb", backgroundColor: "#fff" },
  choiceText: { fontSize: 16 },
  explainer: { marginTop: 12, padding: 12, borderRadius: 12, borderWidth: 1, borderColor: "#e5e7eb", backgroundColor: "#f8fafc", gap: 8 },
  explainerTitle: { fontWeight: "700" },
  explainerText: { color: "#111827" },
});
