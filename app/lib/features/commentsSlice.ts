import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';
import CommentService from '@/app/lib/services/commentService';
interface Comment {
  uuid: string;
  projectId: string;
  userId: string;
  createdAt: string;
  comment: string;
}

interface CommentsState {
  comments: Comment[];
}

const initialState: CommentsState = {
  comments: [],
};

const commentsAction = createAsyncThunk<
  Comment[],
  string,
  { rejectValue: string }
>('comments/fetchComments', async (postId: string, { rejectWithValue }) => {
  try {
    const response = await CommentService.getComment(postId);
    return response.data;
  } catch (error: any) {
    const errorMessage = error.response?.data?.message || 'An error occurred';
    return rejectWithValue(errorMessage);
  }
});

const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(commentsAction.pending, () => {
        toast.loading('Loading...');
      })
      .addCase(commentsAction.fulfilled, (state, { payload }) => {
        const newComments = payload.filter(
          (newComment) =>
            !state.comments.some((comment) => comment.uuid === newComment.uuid)
        );
        state.comments = [...state.comments, ...newComments];
        console.log(state.comments);
        toast.dismiss();
      })
      .addCase(commentsAction.rejected, (_, action) => {
        const errorMessage = action.payload as string;
        toast.dismiss();
        toast.error(errorMessage);
      });
  },
});

// export const { toggleVisibility } = commentsSlice.actions;
export default commentsSlice.reducer;
export { commentsAction };
