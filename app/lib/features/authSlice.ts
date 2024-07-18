import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: {
        message: "",
        statusCode: 0,
    },
    isLoading: false,
    isError: false
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser: (state, {payload}) => {
            return {
                ...state,
                data: payload,
                isLoading: false,
                isError: false
            };
        },
        logout: (state) => {
            return {
                ...state,
                user: initialState.data,
            };
        },
    }
});

export const { setUser, logout } = authSlice.actions;
export default authSlice.reducer;