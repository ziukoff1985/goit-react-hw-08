// 'createSlice' для створення слайсу
// 'isAnyOf' утиліта - використовується в 'addMatcher'
import { createSlice, isAnyOf } from '@reduxjs/toolkit';

// Імпорт асинхронних операції, створені через 'createAsyncThunk' (з файлу contactsOps.js)
import {
  addContactThunk,
  deleteContactThunk,
  fetchContactsThunk,
} from './contactsOps';

// Створюємо slice для управління станом контактів
const contactsSlice = createSlice({
  name: 'contacts', // Ім'я slice
  initialState: {
    items: [], // Початковий стан списку контактів
    isLoading: false, // Стан завантаження
    isError: null, // Повідомлення про помилку
  },

  // 'extraReducers' для обробки 'зовнішніх екшенів' з асинхронних операцій, створених через createAsyncThunk (в файлі contactsOps.js)
  extraReducers: builder => {
    builder
      // Обробка fulfilled запиту для отримання всіх контактів (при першому завантаженні)
      .addCase(fetchContactsThunk.fulfilled, (state, action) => {
        state.items = action.payload; // Зберігаємо отримані контакти
        state.isLoading = false; // Оновлення стану завантаження
        state.isError = false; // Оновлення стану помилки
      })
      // Обробка fulfilled запиту для додавання нового контакту
      .addCase(addContactThunk.fulfilled, (state, action) => {
        state.items.push(action.payload); // Додаємо новий контакт у список
        state.isLoading = false;
        state.isError = false;
      })
      // Обробка fulfilled запиту для видалення контакту
      .addCase(deleteContactThunk.fulfilled, (state, action) => {
        state.items = state.items.filter(item => item.id !== action.payload.id); // Видаляємо контакт із масиву за його ID
        state.isLoading = false;
        state.isError = false;
      })
      // Використовуємо 'addMatcher' для обробки стану "pending" для всіх асинхронних операцій
      .addMatcher(
        isAnyOf(
          fetchContactsThunk.pending,
          deleteContactThunk.pending,
          addContactThunk.pending
        ),
        state => {
          state.isLoading = true;
          state.isError = false;
        }
      )
      // Використовуємо 'addMatcher' для обробки стану "rejected" для всіх асинхронних операцій
      .addMatcher(
        isAnyOf(
          fetchContactsThunk.rejected,
          deleteContactThunk.rejected,
          addContactThunk.rejected
        ),
        (state, action) => {
          state.isError = action.payload;
          state.isLoading = false;
        }
      );
  },
});

// Експортуємо редюсер для використання у store
export const contactsReducer = contactsSlice.reducer;
