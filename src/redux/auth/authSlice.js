import { createSlice } from '@reduxjs/toolkit';
import { registerThunk } from './authOperations';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: {
      name: '',
      email: '',
    },
    token: '',
    isLoggedIn: false,
  },
  extraReducers: builder => {
    builder.addCase(registerThunk.fulfilled, (state, action) => {
      state.user = action.payload.user;
      state.isLoggedIn = true;
      state.token = action.payload.token;
    });
  },
});

export const authReducer = authSlice.reducer;
