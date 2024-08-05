import axios from "axios";

const apiRequest = axios.create({
  baseURL: "https://real-estate-mern-api-liart.vercel.app/",
  withCredentials: true,
});

export default apiRequest;
