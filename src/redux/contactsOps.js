import axios from 'axios'; // 'axios' для HTTP-запитів

// Функція для створення асинхронних операцій
import { createAsyncThunk } from '@reduxjs/toolkit';
import { goitApi } from './auth/authOperations';

// Базова URL-адреса для запитів
axios.defaults.baseURL = 'https://6790da7baf8442fd7378062a.mockapi.io';

// Операція для отримання всіх контактів
export const fetchContactsThunk = createAsyncThunk(
  'contacts/fetchAllContacts', // Ім'я операції
  async (_, thunkAPI) => {
    try {
      // Виконання GET-запиту
      const response = await goitApi.get('/contacts');
      // Повернення отриманих даних
      return response.data;
    } catch (error) {
      // Обробка помилки
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Операція для видалення контакту
export const deleteContactThunk = createAsyncThunk(
  'contacts/deleteContact', // Ім'я операції
  async (id, thunkAPI) => {
    try {
      // Виконання DELETE-запиту
      const response = await goitApi.delete(`/contacts/${id}`);
      // Повернення даних видаленого контакту
      return response.data;
    } catch (error) {
      // Обробка помилки
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Операція для додавання контакту
export const addContactThunk = createAsyncThunk(
  'contacts/addNewContact', // Ім'я операції
  async (body, thunkAPI) => {
    try {
      // Виконання POST-запиту
      const response = await goitApi.post('/contacts', body);
      // Повернення даних нового контакту
      return response.data;
    } catch (error) {
      // Обробка помилки
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
