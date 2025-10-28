export const getBadgeName = (streak: number) => {
  if (streak >= 30) return "🏆 Platinum Badge";
  if (streak >= 15) return "🥇 Gold Badge";
  if (streak >= 7) return "🥈 Silver Badge";
  if (streak >= 3) return "🥉 Bronze Badge";
  if (streak >= 1) return "🌱 Beginner";
  return "— No Streak Yet —";
};

export const getBadgeDescription = (streak: number) => {
  if (streak >= 30)
    return "You’re unstoppable! You’ve mastered your daily learning.";
  if (streak >= 15)
    return "Incredible dedication! You’re becoming a true expert.";
  if (streak >= 7)
    return "Great progress! Keep your learning streak going strong.";
  if (streak >= 3)
    return "Nice! You’re developing a great study habit.";
  if (streak >= 1)
    return "You’ve started your journey. Keep it up!";
  return "Complete your first Daily Challenge to earn your first badge!";
};

export const getBadgeColor = (streak: number) => {
  if (streak >= 30) return "#2563eb"; // Platinum - blue
  if (streak >= 15) return "#facc15"; // Gold - yellow
  if (streak >= 7) return "#a1a1aa"; // Silver - gray
  if (streak >= 3) return "#b45309"; // Bronze - brown
  if (streak >= 1) return "#6b7280"; // Beginner - light gray
  return "#94a3b8"; // default
};

export const getNextBadgeTarget = (streak: number) => {
  if (streak < 3) return 3; // Next: Bronze
  if (streak < 7) return 7; // Next: Silver
  if (streak < 15) return 15; // Next: Gold
  if (streak < 30) return 30; // Next: Platinum
  return 30; // Max badge
};
