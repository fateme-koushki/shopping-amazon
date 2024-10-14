import axios from "axios";


const axiosClient = axios.create({
  baseURL: "https://projects-backend.liara.run",
  headers: {
    "Content-Type": "application-json",
  },
});

export default axiosClient;