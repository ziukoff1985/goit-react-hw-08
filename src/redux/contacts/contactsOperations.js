// import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { goitApi } from '../auth/authOperations';
import toast from 'react-hot-toast';

// axios.defaults.baseURL = 'https://6790da7baf8442fd7378062a.mockapi.io';

export const fetchContactsThunk = createAsyncThunk(
  'contacts/fetchAllContacts',
  async (_, thunkAPI) => {
    try {
      const response = await goitApi.get('/contacts');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContactThunk = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkAPI) => {
    try {
      const response = await goitApi.delete(`/contacts/${id}`);
      toast.success('Contact successfully deleted! 👏 !');
      return response.data;
    } catch (error) {
      toast.error('Failed to delete contact 🤷‍♂️, Try again...');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContactThunk = createAsyncThunk(
  'contacts/addNewContact',
  async (body, thunkAPI) => {
    try {
      const response = await goitApi.post('/contacts', body);
      toast.success('Contact successfully added! 👏');
      return response.data;
    } catch (error) {
      toast.error('Failed to add contact 🤷‍♂️, Try again...');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
