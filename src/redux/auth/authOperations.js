import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// axios.defaults.baseURL = 'https://connections-api.goit.global';

export const goitApi = axios.create({
  baseURL: 'https://connections-api.goit.global',
});

export const setAuthHeader = token => {
  goitApi.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const registerThunk = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const response = await goitApi.post('/users/signup', credentials);
      setAuthHeader(response.data.token);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logInThunk = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const response = await goitApi.post('/users/login', credentials);
      setAuthHeader(response.data.token);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOutThunk = createAsyncThunk(
  'auth/logout',
  async (_, thunkAPI) => {
    try {
      const response = await goitApi.post('/users/logout');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
