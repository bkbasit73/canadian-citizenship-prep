import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import { fetchStudyMaterials } from "../firebase/studyFirestore";

type StudyItem = {
  id: string;
  title: string;
  content: string;
  category: string;
};

export default function StudyScreen() {
  const [materials, setMaterials] = useState<StudyItem[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  useEffect(() => {
    const load = async () => {
      const data = await fetchStudyMaterials();
      const sorted = data.sort((a, b) => a.category.localeCompare(b.category));
      setMaterials(sorted);
    };
    load();
  }, []);

  const categories = Array.from(new Set(materials.map((m) => m.category)));

  const filtered = selectedCategory
    ? materials.filter((m) => m.category === selectedCategory)
    : materials;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>📘 Study Mode</Text>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categories}>
        {categories.map((cat) => (
          <TouchableOpacity
            key={cat}
            style={[
              styles.categoryButton,
              selectedCategory === cat && styles.categorySelected,
            ]}
            onPress={() => setSelectedCategory(cat === selectedCategory ? null : cat)}
          >
            <Text
              style={[
                styles.categoryText,
                selectedCategory === cat && styles.categoryTextSelected,
              ]}
            >
              {cat}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <ScrollView style={styles.content}>
        {filtered.map((item) => (
          <View key={item.id} style={styles.card}>
            <Text style={styles.cardTitle}>{item.title}</Text>
            <Text style={styles.cardContent}>{item.content}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f8fafc", padding: 16 },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#1e3a8a",
    textAlign: "center",
    marginBottom: 16,
  },
  categories: { marginBottom: 12 },
  categoryButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: "#e2e8f0",
    borderRadius: 20,
    marginRight: 8,
  },
  categorySelected: { backgroundColor: "#2563eb" },
  categoryText: { color: "#1e293b", fontSize: 14 },
  categoryTextSelected: { color: "#fff" },
  content: { marginTop: 8 },
  card: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 10,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardTitle: { fontSize: 18, fontWeight: "bold", color: "#1e3a8a" },
  cardContent: { fontSize: 15, color: "#334155", marginTop: 6 },
});