// AuthService.ts

import axiosInstance from '@/app/api/AxiosInstance';

const baseURL = 'api/auth/';

const AuthService = {
  login: async (user: any) => {
    const { data } = await axiosInstance.post(`${baseURL}login`, user);
    return data;
  },
    register: async (user: any) => {
        const { data } = await axiosInstance.post(`${baseURL}register`, user);
        return data;
    },
  logout: async () => {
      const { data } = await axiosInstance.post(`${baseURL}logout`);
      return data;
  },
};

export default AuthService;
