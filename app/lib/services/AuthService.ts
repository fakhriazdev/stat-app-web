// AuthService.ts

import axiosInstance from "@/app/api/AxiosInstance";



const baseURL = 'api/auth/';
//
// interface IUser {
//     username: string;
//     password: string;
// }

const AuthService = {
    login: async (user: any) => {
        try {
            const { data } = await axiosInstance.post(`${baseURL}login`, user);
            return data;
        } catch (error) {
            throw new Error('Login failed'); // Handle error appropriately
        }
    },

    logout: async () => {
        try {
            const { data } = await axiosInstance.post(`${baseURL}logout`);
            return data;
        } catch (error) {
            throw new Error('Logout failed');
        }
    }
};

export default AuthService;
