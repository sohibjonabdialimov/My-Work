import axios from 'axios';
const axiosT = axios.create({
  baseURL: import.meta.env.VITE_API_KEY, // replace with your API base URL
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosT;