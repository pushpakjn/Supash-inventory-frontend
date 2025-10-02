import axios from "axios";

// Create a pre-configured Axios instance
const apiClient = axios.create({
  baseURL: import.meta.env.BACKEND_URL, // use env variable
  headers: {
    "Content-Type": "application/json",
  },
});

export default apiClient;
