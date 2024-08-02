import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import AuthService from '../services/AuthService';
import toast from 'react-hot-toast';
import {deleteCookie, getCookie, setCookie} from 'cookies-next';
import {jwtDecode} from "jwt-decode";

interface User {
  username: string;
  name: string;
}

interface AuthState {
  user:User | null
  isLogin:boolean;
}

const initialState: AuthState = {
  user: null,
  isLogin:false
};

type LoginPayload = { username: string; password: string };
type RegisterPayload = { name:string ,username: string; password: string };

const loginAction = createAsyncThunk('auth/login', async (payload: LoginPayload, { rejectWithValue }) => {
    try {
      const response =  await AuthService.login(payload);
      if(response.statusCode === 202){
        const user = await AuthService.userInfo()
        setCookie('user',JSON.stringify(user))
      }
      return response
    } catch (error: any) {
      const errorMessage = error.response.data.message;
      return rejectWithValue(errorMessage);
    }
  });
const registerAction = createAsyncThunk('auth/register', async (payload: RegisterPayload, { rejectWithValue }) => {
  try {
    return await AuthService.register(payload);

  } catch (error: any) {
    const errorMessage = error.response.data.message;
    return rejectWithValue(errorMessage);
  }
});
const logoutAction = createAsyncThunk('auth/logout', async (_, { rejectWithValue }) => {
  try {
    deleteCookie('user');
    return await AuthService.logout();

  } catch (error: any) {
    const errorMessage = error.response.data.message;
    return rejectWithValue(errorMessage);
  }
});

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loginAction.pending, () => {
      toast.loading("loading");
    });
    builder.addCase(loginAction.fulfilled, (state, { payload }) => {
      if (payload.data) {
        state.user = payload.data;
      }
      state.isLogin = true
      toast.dismiss();
      toast.success('Login successful');
    });
    builder.addCase(loginAction.rejected, (state, action) => {
      const errorMessage = action.payload as string;
      toast.dismiss();
      toast.error(errorMessage);
    });

    builder.addCase(registerAction.pending, () => {
      toast.loading("loading");
    });
    builder.addCase(registerAction.fulfilled, (state, { payload }) => {
      state.user = payload;
      state.isLogin = true
      toast.dismiss();
      toast.success('register successful');
    });
    builder.addCase(registerAction.rejected, (state, action) => {
      const errorMessage = action.payload as string;
      toast.dismiss();
      toast.error(errorMessage);
    });

    builder.addCase(logoutAction.pending, () => {
      toast.loading("loading");
    });
    builder.addCase(logoutAction.fulfilled, (state, { payload }) => {
      state.user = payload;
      state.isLogin = false
      toast.dismiss();
      toast.success('Logout successful');
    });
    builder.addCase(logoutAction.rejected, (state, action) => {
      const errorMessage = action.payload as string;
      toast.dismiss();
      toast.error(errorMessage);
    });

  },
});

export default authSlice.reducer;
export { loginAction,logoutAction,registerAction};
