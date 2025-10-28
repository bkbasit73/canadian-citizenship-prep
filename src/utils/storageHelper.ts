// src/utils/storageHelper.ts

import { Platform } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Storage = {
  // Save data
  setItem: async (key: string, value: string) => {
    try {
      if (Platform.OS === "web") {
        localStorage.setItem(key, value);
      } else {
        await AsyncStorage.setItem(key, value);
      }
    } catch (error) {
      console.error("Storage setItem error:", error);
    }
  },

  // Retrieve data
  getItem: async (key: string): Promise<string | null> => {
    try {
      if (Platform.OS === "web") {
        return localStorage.getItem(key);
      } else {
        return await AsyncStorage.getItem(key);
      }
    } catch (error) {
      console.error("Storage getItem error:", error);
      return null;
    }
  },

  // Remove data
  removeItem: async (key: string) => {
    try {
      if (Platform.OS === "web") {
        localStorage.removeItem(key);
      } else {
        await AsyncStorage.removeItem(key);
      }
    } catch (error) {
      console.error("Storage removeItem error:", error);
    }
  },

  // Clear all saved data (optional)
  clearAll: async () => {
    try {
      if (Platform.OS === "web") {
        localStorage.clear();
      } else {
        await AsyncStorage.clear();
      }
    } catch (error) {
      console.error("Storage clearAll error:", error);
    }
  },
};

export default Storage;
