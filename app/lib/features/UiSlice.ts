// uiSlice.ts
import { createSlice } from "@reduxjs/toolkit";

interface UiState {
    isLoading: boolean;
}

const initialState: UiState = {
    isLoading: false,
};

const uiSlice = createSlice({
    name: "ui",
    initialState,
    reducers: {
        setLoading: (state, action) => {
            state.isLoading = action.payload;
        },
        loading: (state) => {
            state.isLoading = true;
        },
        success: (state) => {
            state.isLoading = false;
            // Additional success state handling if needed
        },
        error: (state) => {
            state.isLoading = false;
            // Additional error state handling if needed
        },
    },
});

export const { setLoading, loading, success, error } = uiSlice.actions;
export default uiSlice.reducer;
