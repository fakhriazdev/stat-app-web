import axios, { AxiosInstance } from 'axios';
import {getCookie} from 'cookies-next';

const axiosInstance: AxiosInstance = axios.create();

axiosInstance.interceptors.request.use(
  (config) => {
    const token = getCookie('jwt');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
  
  }
);

export default axiosInstance;
