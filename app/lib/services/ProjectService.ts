import axiosInstance from '@/app/api/AxiosInstance';

const baseURL = '/api/';
const ProjectService = {
    getProjectsUser: async () => {
        const { data } = await axiosInstance.get(`${baseURL}/projects/user`);
        return data;
    },
};

export default ProjectService;
