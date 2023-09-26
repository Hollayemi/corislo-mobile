import axios from "axios";

export default axios.create({
  baseURL: "https://corislo-backend.onrender.com/api/v1/",

  withCredentials: true,
});
