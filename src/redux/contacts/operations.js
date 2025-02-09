import toast from 'react-hot-toast';

// Функція для створення асинхронних операцій
import { createAsyncThunk } from '@reduxjs/toolkit';

// екземпляр 'axios' з базовим URL для API запитів
import { goitApi } from '../auth/operations';

// Операція для отримання всіх контактів
export const fetchContactsThunk = createAsyncThunk(
  'contacts/fetchAllContacts', // Ім'я операції
  async (_, thunkAPI) => {
    try {
      // Виконуємо GET-запит до API
      const response = await goitApi.get('/contacts');
      return response.data; // Повертаємо отримані дані
      // Обробка помилки
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Операція для видалення контакту
export const deleteContactThunk = createAsyncThunk(
  'contacts/deleteContact', // Ім'я операції
  // id - ідентифікатор контакту, який потрібно видалити
  async (id, thunkAPI) => {
    try {
      // Виконуємо DELETE-запит до API
      const response = await goitApi.delete(`/contacts/${id}`);
      toast.success('Contact successfully deleted! 👏 !', {
        duration: 5000, // 5 сек відображення повідомлення
        style: { background: 'red', color: 'white' }, // Кастомний стиль
      });
      // Повертаємо дані після видалення
      return response.data;
      // Обробка помилки
    } catch (error) {
      toast.error('Failed to delete contact 🤷‍♂️, Try again...');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Операція для додавання контакту
export const addContactThunk = createAsyncThunk(
  'contacts/addNewContact', // Ім'я операції
  // body - дані нового контакту
  async (body, thunkAPI) => {
    try {
      // Виконуємо POST-запит до API
      const response = await goitApi.post('/contacts', body);
      toast.success('Contact successfully added! 👏', {
        duration: 5000,
        style: { background: 'green', color: 'white' }, // Кастомний стиль
      });
      // Повертаємо дані після додавання
      return response.data;
      // Обробка помилки
    } catch (error) {
      toast.error('Failed to add contact 🤷‍♂️, Try again...');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
