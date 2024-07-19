import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import AuthService from '../services/AuthService';

interface AuthState {
  user: any;
}

const initialState: AuthState = {
  user: null,
};

type LoginPayload = { username: string; password: string };

const loginAction = createAsyncThunk(
  'auth/login',
  async (payload: LoginPayload, { rejectWithValue }) => {
    try {
      return await AuthService.login(payload);
    } catch (error: any) {
      const errorMessage = error.response.data.message;
      return rejectWithValue(errorMessage);
    }
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loginAction.fulfilled, (state, { payload }) => {
      state.user = payload;
    });
  },
});

export default authSlice.reducer;
export { loginAction };
