import axios from 'axios'; // Імпорт axios
import toast from 'react-hot-toast'; // Імпорт react-hot-toast

// Імпорт `createAsyncThunk` з Redux Toolkit для створення асинхронних операцій
import { createAsyncThunk } from '@reduxjs/toolkit';

// Створюємо екземпляр 'axios' з базовим URL для API запитів
export const goitApi = axios.create({
  baseURL: 'https://connections-api.goit.global', // API-сервер, для запитів
});

// Функція для встановлення заголовка авторизації (за замовчуванням) у всіх запитах
export const setAuthHeader = token => {
  goitApi.defaults.headers.common.Authorization = `Bearer ${token}`;
};

// Функція для очищення заголовка авторизації (використовується при Log Out користувача)
export const clearAuthHeader = () => {
  goitApi.defaults.headers.common.Authorization = '';
};

// Асинхронний thunk для реєстрації нового користувача
// 'credentials' - об'єкт, який передається у registerThunk та logInThunk під час сабміту форми
// Він містить дані, які користувач вводить у форму входу чи реєстрації (файли LoginForm i RegistrationForm)
export const registerThunk = createAsyncThunk(
  'auth/register', // Ім'я операції
  async (credentials, thunkAPI) => {
    try {
      // POST-запит на реєстрацію користувача
      const response = await goitApi.post('/users/signup', credentials);
      // Встановлюємо заголовок авторизації
      setAuthHeader(response.data.token);
      // Повернення отриманих даних
      return response.data;
      // Обробка помилки
    } catch (error) {
      // Якщо сервер повертає код 11000 (користувач вже існує), виводимо повідомлення
      if (error.response && error.response.data.code === 11000) {
        toast.error('User already exist!'); // Відображаємо помилку у сповіщенні
        return thunkAPI.rejectWithValue(error.message);
      }
      // Повертаємо помилку в Redux
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Асинхронний thunk для логіну користувача
export const logInThunk = createAsyncThunk(
  'auth/login', // Ім'я операції
  async (credentials, thunkAPI) => {
    try {
      // POST-запит на login
      const response = await goitApi.post('/users/login', credentials);
      // Встановлюємо заголовок авторизації
      setAuthHeader(response.data.token);
      // Повернення отриманих даних
      return response.data;
      // Обробка помилки
    } catch (error) {
      // Якщо вхід неуспішний, виводимо повідомлення про помилку
      toast.error('Invalid e-mail or password!🤷‍♂️');
      // Повертаємо помилку в Redux
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Асинхронний thunk для виходу користувача
export const logOutThunk = createAsyncThunk(
  'auth/logout', // Ім'я операції
  async (_, thunkAPI) => {
    try {
      // POST-запит на вихід із системи
      const response = await goitApi.post('/users/logout');
      // Відображаємо повідомлення про успішний вихід
      toast.success('Thanks for using our app🙂 See you soon👋', {
        duration: 5000,
        // style: {
        //   width: '1000px',
        //   height: '100px',
        //   fontSize: '18px',
        //   padding: '15px',
        //   background: '#4caf50',
        //   color: 'white',
        //   borderRadius: '10px',
        // },
      });
      // Видаляємо токен авторизації, щоб запобігти використанню неактуального токена
      clearAuthHeader();
      // Повернення отриманих даних
      return response.data;
      // Обробка помилки
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Асинхронний thunk для автоматичного оновлення інформації про користувача
export const refreshUserThunk = createAsyncThunk(
  'auth/refresh', // Ім'я операції
  async (_, thunkAPI) => {
    // Отримуємо збережений токен зі стану Redux
    const savedToken = thunkAPI.getState().auth.token;
    // Якщо токену немає, повертаємо помилку
    if (savedToken === null) {
      return thunkAPI.rejectWithValue('Token is not exist');
    }
    // Встановлюємо заголовок авторизації
    setAuthHeader(savedToken);
    try {
      // GET-запит для отримання інформації про поточного користувача
      const response = await goitApi.get('/users/current');
      // Повернення отриманих даних
      return response.data;
      // Обробка помилки
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
