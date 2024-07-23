// AuthService.ts

import axiosInstance from '@/app/api/AxiosInstance';

const baseURL = 'api/auth/';
//
// interface IUser {
//     username: string;
//     password: string;
// }

const AuthService = {
  login: async (user: any) => {
    const { data } = await axiosInstance.post(`${baseURL}login`, user);
    return data;
  },

  logout: async () => {
      const { data } = await axiosInstance.post(`${baseURL}logout`);
      return data;
  },
};

export default AuthService;
