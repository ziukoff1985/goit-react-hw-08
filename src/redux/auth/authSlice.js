import { createSlice } from '@reduxjs/toolkit';
import { logInThunk, logOutThunk, registerThunk } from './authOperations';

const initialState = {
  user: {
    name: '',
    email: '',
  },
  token: '',
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(registerThunk.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.isLoggedIn = true;
        state.token = action.payload.token;
      })
      .addCase(logInThunk.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.isLoggedIn = true;
        state.token = action.payload.token;
      })
      .addCase(logOutThunk.fulfilled, () => {
        return initialState;
      });
  },
});

export const authReducer = authSlice.reducer;
