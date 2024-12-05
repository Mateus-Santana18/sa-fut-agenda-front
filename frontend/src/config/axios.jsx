import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080", 
  timeout: 10000, 
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});


api.interceptors.request.use(
  (config) => {
    const token = sessionStorage.getItem("token"); 
    if (token) {
      config.headers.Authorization = `Bearer ${token.replace('"', '')}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      window.location.href = "/";
    }
    return Promise.reject(error);
  },
);

export default api;
