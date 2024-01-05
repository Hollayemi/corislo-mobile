import axios from "axios";
import storage from "../storage";

const getToken = async () => {
  try {
    const token = await storage.load({
      key: "userToken",
    });
    return token;
  } catch (error) {
    console.log("error in axios fetch");
    console.log("ERROR : ", error);
    return;
  }
};

// Create an Axios instance with dynamic token inclusion
const axiosInstance = axios.create({
  baseURL: "https://corislo-backend.onrender.com/api/v1/",
  withCredentials: true,
});

// Add an interceptor to set the Authorization header with the token
axiosInstance.interceptors.request.use(
  async (config) => {
    // Get the token dynamically using the getToken function
    const token = await getToken();

    // Set the Authorization header with the token
    if (token) {
      config.headers.Authorization = token;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
