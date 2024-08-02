import axiosInstance from '@/app/api/AxiosInstance';

const baseURL = '/api/';
const ProfileService = {
    getProfile: async (user: any) => {
        const { data } = await axiosInstance.get(`${baseURL}/profiles/user/${user}`);
        return data;
    },
};

export default ProfileService;
