import axios, { AxiosInstance } from 'axios';
import {getCookie} from "cookies-next";

const axiosInstance: AxiosInstance = axios.create();

axiosInstance.interceptors.request.use(
    (config) => {
        const token = getCookie('token')
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default axiosInstance;
