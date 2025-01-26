import { createSlice } from '@reduxjs/toolkit';

interface LoadingState {
  loading: boolean;
}

const initialState: LoadingState = {
  loading: false,
};

const loadingSlice = createSlice({
  name: 'loading',
  initialState,
  reducers: {
    startLoader: (state) => {
      state.loading = true;
    },
    endLoader: (state) => {
      state.loading = false;
    },
  },
});

export const { startLoader, endLoader } = loadingSlice.actions;
export default loadingSlice.reducer; 