import axios from 'axios';
const axiosT = axios.create({
  baseURL: import.meta.env.VITE_API_KEY, // replace with your API base URL
  headers: {
    'Content-Type': 'application/json',
  },
});


const handleResponseError = (error) => {
  const originalRequest = error.config;

  if (error.response?.status === 401 && !originalRequest._retry) {
    originalRequest._retry = true;
    
    const refreshToken = localStorage.getItem('refreshToken');
    if (!refreshToken) {
      // If there's no refresh token, redirect to login
      window.location.href = '/login';
      return Promise.reject(error);
    }

    return axios
      .post(`${import.meta.env.VITE_API_KEY}/token-refresh`, { refresh: refreshToken })
      .then(({ data }) => {
        localStorage.setItem('accessToken', data.accessToken);
        originalRequest.headers.Authorization = `Bearer ${data.accessToken}`;
        return axiosT(originalRequest);
      })
      .catch((refreshError) => {
        console.error('Token refresh failed:', refreshError);
        window.location.href = '/login';
        return Promise.reject(refreshError);
      });
  }

  return Promise.reject(error);
}

axiosT.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

axiosT.interceptors.response.use(
  (response) => response,
  handleResponseError
);

export default axiosT;
