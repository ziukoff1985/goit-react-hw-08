// 'createSlice' для створення слайсу
import { createSlice } from '@reduxjs/toolkit';

// Імпорт thunk-ів з файлу auth/operations
import {
  logInThunk,
  logOutThunk,
  refreshUserThunk,
  registerThunk,
} from './operations';

// Початковий стан для слайсу аутентифікації
const initialState = {
  user: {
    name: null, // Ім'я користувача
    email: null, // E-mail користувача
  },
  token: null, // Токен аутентифікації
  isLoggedIn: false, // Прапорець: залоговиний чи ні
  isRefreshing: false, // Прапорець: відбувається оновлення даних користувача чи ні
};

// Створюємо slice для аутентифікації
const authSlice = createSlice({
  name: 'auth', // Назва слайсу
  initialState, // Початковий стан, визначений вище
  // 'extraReducers' для обробки 'зовнішніх екшенів' з асинхронних операцій
  // Створені через createAsyncThunk (з файлу auth/operations)
  extraReducers: builder => {
    builder
      // Обробка fulfilled-стану для реєстрації
      // 'registerThunk' - з файлу auth/operations.js
      // 'addCase' - для обробки конкретного екшену
      .addCase(registerThunk.fulfilled, (state, action) => {
        state.user = action.payload.user; // Оновлення даних користувача
        state.isLoggedIn = true; // Встановлення isLoggedIn у true
        state.token = action.payload.token; // Збереження токену аутентифікації
      })
      // Обробка fulfilled-стану для логіну
      // 'logInThunk' - з файлу auth/operations.js
      .addCase(logInThunk.fulfilled, (state, action) => {
        state.user = action.payload.user; // Оновлення даних користувача
        state.isLoggedIn = true; // Встановлення isLoggedIn у true
        state.token = action.payload.token; // Збереження токену аутентифікації
      })
      // Обробка fulfilled-стану для виходу з системи
      // 'logOutThunk' - з файлу auth/operations.js
      .addCase(logOutThunk.fulfilled, () => {
        return initialState; // Повернення до початкового стану (скидання даних)
      })
      // Обробка fulfilled-стану для "refresh" (оновлення даних користувача)
      // 'refreshUserThunk' - з файлу auth/operations.js
      .addCase(refreshUserThunk.fulfilled, (state, action) => {
        state.user.name = action.payload.name; // Оновлення імені користувача
        state.user.email = action.payload.email; // Оновлення е-mail користувача
        state.isLoggedIn = true; // Встановлення isLoggedIn у true
        state.isRefreshing = false; // Зупинка стану "refresh" (оновлення)
      })
      // Обробка pending-стану запиту для "refresh" (оновлення даних користувача)
      .addCase(refreshUserThunk.pending, state => {
        state.isRefreshing = true; // Встановлення isRefreshing у true
      })
      // Обробка rejected-стану запиту для "refresh" (оновлення даних користувача)
      .addCase(refreshUserThunk.rejected, state => {
        state.isRefreshing = false; // Зупинка стану "refresh" (оновлення)
      });
  },
});

// Експорт редюсера слайсу аутентифікації
export const authReducer = authSlice.reducer;
