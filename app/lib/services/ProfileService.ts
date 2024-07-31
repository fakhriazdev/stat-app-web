import axiosInstance from '@/app/api/AxiosInstance';

const baseURL = 'api/profiles/';
const ProfileService = {
    getProfile: async (user: any) => {
        const url = `${baseURL}${user}`;
        console.log('Request URL:', url);
        const { data } = await axiosInstance.get(url);
        return data;
    },
};

export default ProfileService;
