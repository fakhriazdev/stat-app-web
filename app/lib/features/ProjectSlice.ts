import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';
import ProjectService from "@/app/lib/services/ProjectService";



const initialState = {
    projects:[]
};




const projectAction = createAsyncThunk('project', async (_, { rejectWithValue }) => {
    try {
      return await ProjectService.getProjectsUser()

    } catch (error: any) {
        const errorMessage = error.response.data.message;
        return rejectWithValue(errorMessage);
    }
});

const projectSlice = createSlice({
    name: 'project',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(projectAction.pending, (_, { payload }) => {

        });
        builder.addCase(projectAction.fulfilled, (state, { payload }) => {
            state.projects = payload.data;

        });
        builder.addCase(projectAction.rejected, (_, action) => {
            const errorMessage = action.payload as string;
            toast.error(errorMessage);
        });

    },
});

export default projectSlice.reducer;
export {projectAction};
