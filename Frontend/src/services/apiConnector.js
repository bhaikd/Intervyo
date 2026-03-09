import axios from "axios";

export const axiosInstance = axios.create({
  withCredentials: true,
});

// Add a response interceptor
axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      // Clear local storage and redirect to login on 401
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      
      // Only redirect if not already on login or home
      const currentPath = window.location.pathname;
      if (currentPath !== "/login" && currentPath !== "/") {
        window.location.href = "/login";
      }
    }
    return Promise.reject(error);
  }
);

export const apiConnector = (method, url, bodyData, headers, params) => {
  return axiosInstance({
    method: `${method}`,
    url: `${url}`,
    data: bodyData ? bodyData : null,
    headers: headers ? headers : null,
    params: params ? params : null,
  });
};
