// src/components/BadgePopup.tsx
import React, { useEffect, useRef } from "react";
import { Animated, View, Text } from "react-native";
import ConfettiCannon from "react-native-confetti-cannon";

interface BadgePopupProps {
  badge: string;
  message: string;
  visible: boolean;
}

export default function BadgePopup({ badge, message, visible }: BadgePopupProps) {
  const opacity = useRef(new Animated.Value(0)).current;
  const scale = useRef(new Animated.Value(0.8)).current;

  // Confetti colors per badge type
  const getConfettiColors = () => {
    switch (badge.toLowerCase()) {
      case "bronze":
        return ["#cd7f32", "#b87333", "#8c5523"];
      case "silver":
        return ["#c0c0c0", "#a8a9ad", "#9ea0a5"];
      case "gold":
        return ["#ffd700", "#ffcc00", "#f4e242"];
      case "platinum":
        return ["#00bfff", "#4f9ded", "#7ec8e3"];
      default:
        return ["#ff4081", "#ffeb3b", "#3f51b5"];
    }
  };

  useEffect(() => {
    if (visible) {
      Animated.parallel([
        Animated.timing(opacity, {
          toValue: 1,
          duration: 400,
          useNativeDriver: true,
        }),
        Animated.spring(scale, {
          toValue: 1,
          friction: 6,
          useNativeDriver: true,
        }),
      ]).start();

      setTimeout(() => {
        Animated.timing(opacity, {
          toValue: 0,
          duration: 400,
          useNativeDriver: true,
        }).start();
      }, 5000);
    }
  }, [visible]);

  if (!visible) return null;

  return (
    <View
      style={{
        position: "absolute",
        top: "35%",
        left: 0,
        right: 0,
        alignItems: "center",
        zIndex: 999,
      }}
    >
      <Animated.View
        style={{
          opacity,
          transform: [{ scale }],
          backgroundColor: "white",
          borderRadius: 16,
          padding: 20,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.25,
          shadowRadius: 8,
          elevation: 10,
          maxWidth: 320,
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 36, marginBottom: 8 }}>{badge} 🏅</Text>
        <Text style={{ fontSize: 20, fontWeight: "bold", color: "#1e3a8a" }}>
          Congratulations!
        </Text>
        <Text style={{ fontSize: 16, color: "#334155", marginTop: 8, textAlign: "center" }}>
          {message}
        </Text>
      </Animated.View>

      {/* 🎉 Confetti Animation */}
      <ConfettiCannon
        count={120}
        origin={{ x: 0, y: 0 }}
        fadeOut={true}
        colors={getConfettiColors()}
        fallSpeed={3000}
        autoStart={true}
      />
    </View>
  );
}
