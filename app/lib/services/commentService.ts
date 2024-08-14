import axiosInstance from '@/app/api/AxiosInstance';

const baseURL = '/api/';
const ProfileService = {
    getComment: async (projectId: string) => {
        const { data } = await axiosInstance.get(`${baseURL}/comments/${projectId}`);
        return data;
    },
};

export default ProfileService;
