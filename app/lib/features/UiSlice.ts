// uiSlice.ts
import { createSlice } from '@reduxjs/toolkit';

interface UiState {
  isLoading: boolean;
  error: string | null;
}

const initialState: UiState = {
  isLoading: false,
  error: null,
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.isLoading = action.payload;
      state.error = null;
    },
    loading: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    success: (state) => {
      state.isLoading = false;
      state.error = null;
    },
    error: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { setLoading, loading, success, error } = uiSlice.actions;
export default uiSlice.reducer;
