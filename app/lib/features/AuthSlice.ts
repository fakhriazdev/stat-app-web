// authSlice.ts

import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import AuthService from "../services/AuthService";



// Import AuthService

interface AuthState {
    loggedIn: boolean;
    user: any; // Adjust as per your user data structure
    error: string | null;
}

const initialState: AuthState = {
    loggedIn: false,
    user: null,
    error: null,
};

// Define payloadBuilder function types for login
type LoginPayload = { username: string; password: string };

// Create async thunk using createAsyncThunk
const loginAction = createAsyncThunk(
    'auth/login',
    async (payload: LoginPayload, { rejectWithValue }) => {
        try {
            return await AuthService.login(payload);
        } catch (error) {
            const errorMessage = error || "Login failed";
            return rejectWithValue(errorMessage);
        }
    }
);

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(loginAction.fulfilled, (state, action: PayloadAction<any>) => {
                state.loggedIn = true;
                state.user = action.payload;
                state.error = null;
            })
            .addCase(loginAction.rejected, (state, action: PayloadAction<any>) => {
                state.loggedIn = false;
                state.user = null;
                state.error = (action.payload as string) || 'Login failed'; // Cast to string
            });

    },
});


export default authSlice.reducer; // Export reducer
export { loginAction };
