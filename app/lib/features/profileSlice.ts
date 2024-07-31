import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';
import ProfileService from "@/app/lib/services/ProfileService";

const initialState = {
    profile:{}
};




const profileAction = createAsyncThunk('profile', async (payload: string, { rejectWithValue }) => {
    try {
        return await ProfileService.getProfile(payload);

    } catch (error: any) {
        const errorMessage = error.response.data.message;
        return rejectWithValue(errorMessage);
    }
});

const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(profileAction.pending, (state, { payload }) => {
            toast.loading("loading");
        });
        builder.addCase(profileAction.fulfilled, (state, { payload }) => {
            state.profile = payload.data;
            toast.dismiss();
        });
        builder.addCase(profileAction.rejected, (_, action) => {
            const errorMessage = action.payload as string;
            toast.dismiss();
            toast.error(errorMessage);
        });

    },
});

export default profileSlice.reducer;
export {profileAction};
