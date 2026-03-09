import { apiConnector } from "../apiConnector";
import { BASE_URL } from "../apis";

export const achievementService = {
  // Check for new achievements
  checkAchievements: async (token) => {
    try {
      const response = await apiConnector(
        "POST",
        `${BASE_URL}/achievements/check`,
        null,
        {
          Authorization: `Bearer ${token}`,
        },
      );

      return response.data;
    } catch (error) {
      console.error("Error checking achievements:", error);
      return { success: false, data: { newAchievements: [] } };
    }
  },

  // Get all achievements
  getAllAchievements: async (token) => {
    try {
      const response = await apiConnector(
        "GET",
        `${BASE_URL}/achievements/all`,
        null,
        {
          Authorization: `Bearer ${token}`,
        },
      );

      return response.data;
    } catch (error) {
      console.error("Error fetching achievements:", error);
      return { success: false, data: { all: [], grouped: {} } };
    }
  },

  // Mark achievement as notified
  markAsNotified: async (achievementId, token) => {
    try {
      const response = await apiConnector(
        "POST",
        `${BASE_URL}/achievements/mark-notified/${achievementId}`,
        null,
        {
          Authorization: `Bearer ${token}`,
        },
      );

      return response.data;
    } catch (error) {
      console.error("Error marking achievement as notified:", error);
      return { success: false };
    }
  },

  // Initialize achievements (run once)
  initializeAchievements: async (token) => {
    try {
      const response = await apiConnector(
        "POST",
        `${BASE_URL}/achievements/initialize`,
        null,
        {
          Authorization: `Bearer ${token}`,
        },
      );

      return response.data;
    } catch (error) {
      console.error("Error initializing achievements:", error);
      return { success: false };
    }
  },
};
