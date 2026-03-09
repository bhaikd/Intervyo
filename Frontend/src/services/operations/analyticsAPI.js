import { apiConnector } from "../apiConnector";
import { toast } from "react-hot-toast";
<<<<<<< HEAD
import { BASE_URL } from "../apis";

const ANALYTICS_BASE_URL = `${BASE_URL}/analytics`;
=======
import { analyticsEndpoints } from "../apis";

const { GET_USER_ANALYTICS_API, GET_SKILL_RADAR_API } = analyticsEndpoints;
>>>>>>> c7142775840e9eadce197eb667ef4c5daf2a28b5

export const getUserAnalytics = async (token, timeRange = 30) => {
  try {
    const response = await apiConnector(
      "GET",
<<<<<<< HEAD
      `${ANALYTICS_BASE_URL}?timeRange=${timeRange}`,
=======
      `${GET_USER_ANALYTICS_API}?timeRange=${timeRange}`,
>>>>>>> c7142775840e9eadce197eb667ef4c5daf2a28b5
      null,
      {
        Authorization: `Bearer ${token}`,
      },
    );
    return response.data;
  } catch (error) {
    console.error("Analytics fetch error:", error);
    toast.error("Failed to load analytics");
    throw error;
  }
};

export const getSkillRadar = async (token) => {
  try {
<<<<<<< HEAD
    const response = await apiConnector("GET", `${ANALYTICS_BASE_URL}/skills`, null, {
=======
    const response = await apiConnector("GET", GET_SKILL_RADAR_API, null, {
>>>>>>> c7142775840e9eadce197eb667ef4c5daf2a28b5
      Authorization: `Bearer ${token}`,
    });
    return response.data;
  } catch (error) {
    console.error("Skill radar fetch error:", error);
    throw error;
  }
};
