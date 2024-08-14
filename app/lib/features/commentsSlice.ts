import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';
import CommentService from "@/app/lib/services/commentService";


interface CommentsState {
    comments: any[];
}

const initialState: CommentsState = {
    comments: [],
};


const commentsAction = createAsyncThunk<Comment[], string, { rejectValue: string }>(
    'comments/fetchComments',
    async (projectId: string, { rejectWithValue }) => {
        try {
            const response = await CommentService.getComment(projectId);
            return response.data;
        } catch (error: any) {
            const errorMessage = error.response?.data?.message || 'An error occurred';
            return rejectWithValue(errorMessage);
        }
    }
);
const commentsSlice = createSlice({
    name: 'comments',
    initialState,
    reducers: {
        clearComments: (state) => {
            state.comments = []; // Clear the comments array
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(commentsAction.pending, () => {
                toast.loading("Loading...");
            })
            .addCase(commentsAction.fulfilled, (state, { payload}) => {
                state.comments = payload

                toast.dismiss();
            })
            .addCase(commentsAction.rejected, (_, action) => {
                const errorMessage = action.payload as string;
                toast.dismiss();
                toast.error(errorMessage);
            });
    },
});

export const { clearComments } = commentsSlice.actions;
export default commentsSlice.reducer;
export { commentsAction };
