import axiosInstance from '@/app/api/AxiosInstance';

const baseURL = '/api/';
const ProfileService = {
    getComment: async (profileId: any) => {
        const { data } = await axiosInstance.get(`${baseURL}/comments`,profileId);
        return data;
    },
};

export default ProfileService;
