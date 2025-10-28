import React, { useEffect, useState } from "react";
import { View, Text, Image, ScrollView, StyleSheet } from "react-native";
import { listenToUserData } from "../firebase/firestoreService";

interface Badge {
  name: string;
  icon: any;
  unlocked: boolean;
  description: string;
}

export default function TrophyGalleryScreen() {
  const [streak, setStreak] = useState(0);
  const [badges, setBadges] = useState<Badge[]>([]);

  useEffect(() => {
    const userId = "guest"; // or user.uid if you add auth later
    const unsubscribe = listenToUserData(userId, (data) => {
      setStreak(data?.streakCount || 0);

      const allBadges: Badge[] = [
        {
          name: "Bronze",
          icon: require("../../assets/icons/bronze.png"),
          unlocked: (data?.badges || []).includes("Bronze"),
          description: "Earned for completing 3 consecutive study days.",
        },
        {
          name: "Silver",
          icon: require("../../assets/icons/silver.png"),
          unlocked: (data?.badges || []).includes("Silver"),
          description: "Earned for completing 7 consecutive study days.",
        },
        {
          name: "Gold",
          icon: require("../../assets/icons/gold.png"),
          unlocked: (data?.badges || []).includes("Gold"),
          description: "Earned for completing 15 consecutive study days.",
        },
        {
          name: "Platinum",
          icon: require("../../assets/icons/platinum.png"),
          unlocked: (data?.badges || []).includes("Platinum"),
          description: "Earned for completing 30 consecutive study days.",
        },
      ];

      setBadges(allBadges);
    });

    return () => unsubscribe(); // Stop listening when screen unmounts
  }, []);

  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
        alignItems: "center",
        backgroundColor: "#f8fafc",
        padding: 20,
      }}
    >
      <Text style={{ fontSize: 28, fontWeight: "bold", color: "#1e3a8a", marginBottom: 20 }}>
        🏆 Trophy Gallery
      </Text>

      {badges.map((badge) => (
        <View
          key={badge.name}
          style={{
            backgroundColor: "white",
            width: "90%",
            borderRadius: 16,
            padding: 20,
            marginBottom: 16,
            shadowColor: "#000",
            shadowOpacity: 0.15,
            shadowRadius: 8,
            elevation: 6,
            alignItems: "center",
          }}
        >
          <Image
            source={badge.icon}
            style={{
              width: 80,
              height: 80,
              tintColor: badge.unlocked ? undefined : "#94a3b8",
              opacity: badge.unlocked ? 1 : 0.4,
              marginBottom: 10,
            }}
            resizeMode="contain"
          />
          <Text
            style={{
              fontSize: 22,
              fontWeight: "bold",
              color: badge.unlocked ? "#1e293b" : "#94a3b8",
            }}
          >
            {badge.name} Badge
          </Text>
          <Text
            style={{
              color: badge.unlocked ? "#475569" : "#94a3b8",
              textAlign: "center",
              marginTop: 6,
            }}
          >
            {badge.description}
          </Text>
        </View>
      ))}
    </ScrollView>
  );
}
