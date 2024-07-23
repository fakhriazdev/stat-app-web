// uiSlice.ts
import { createSlice } from '@reduxjs/toolkit';

interface UiState {
  isLoading: boolean;
  message: string | null;
}

const initialState: UiState = {
  isLoading: false,
  message: null,
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.isLoading = action.payload;
      state.message = null;
    },
    loading: (state) => {
      state.isLoading = true;
      state.message = null;
    },
    success: (state,action) => {
      state.isLoading = false;
      state.message = action.payload;
    },
    error: (state, action) => {
      state.isLoading = false;
      state.message = action.payload;
    },
  },
});

export const { setLoading, loading, success, error } = uiSlice.actions;
export default uiSlice.reducer;
