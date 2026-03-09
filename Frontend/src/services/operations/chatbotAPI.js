import { apiConnector } from "../apiConnector";
import { BASE_URL } from "../apis";

const CHATBOT_BASE_URL = `${BASE_URL}/chatbot`;

// Helper to get token
const getToken = () => localStorage.getItem("token");

// Conversation management
export const createConversation = async (data) => {
  const token = getToken();
  const response = await apiConnector("POST", `${CHATBOT_BASE_URL}/conversations`, data, {
    Authorization: `Bearer ${token}`,
  });
  return response.data;
};

export const getUserConversations = async (params) => {
  const token = getToken();
  const response = await apiConnector("GET", `${CHATBOT_BASE_URL}/conversations`, null, {
    Authorization: `Bearer ${token}`,
  }, params);
  return response.data;
};

export const getConversation = async (sessionId) => {
  const token = getToken();
  const response = await apiConnector("GET", `${CHATBOT_BASE_URL}/conversations/${sessionId}`, null, {
    Authorization: `Bearer ${token}`,
  });
  return response.data;
};

export const updateConversation = async (sessionId, data) => {
  const token = getToken();
  const response = await apiConnector("PATCH", `${CHATBOT_BASE_URL}/conversations/${sessionId}`, data, {
    Authorization: `Bearer ${token}`,
  });
  return response.data;
};

export const deleteConversation = async (sessionId) => {
  const token = getToken();
  const response = await apiConnector("DELETE", `${CHATBOT_BASE_URL}/conversations/${sessionId}`, null, {
    Authorization: `Bearer ${token}`,
  });
  return response.data;
};

export const clearMessages = async (sessionId) => {
  const token = getToken();
  const response = await apiConnector("DELETE", `${CHATBOT_BASE_URL}/conversations/${sessionId}/messages`, null, {
    Authorization: `Bearer ${token}`,
  });
  return response.data;
};

// Message handling
export const sendMessage = async (sessionId, message, context) => {
  const token = getToken();
  const response = await apiConnector(
    "POST",
    `${CHATBOT_BASE_URL}/conversations/${sessionId}/messages`,
    {
      message,
      context,
    },
    {
      Authorization: `Bearer ${token}`,
    },
  );
  return response.data;
};
