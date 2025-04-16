// 'createSlice' для створення слайсу
// 'isAnyOf' утиліта - використовується в 'addMatcher' (для групування екшенів)
import { createSlice, isAnyOf } from '@reduxjs/toolkit';

// Імпорт асинхронних операцій, створені через 'createAsyncThunk' (з файлу /contacts/operations.js)
import {
  addContactThunk,
  deleteContactThunk,
  editContactThunk,
  fetchContactsThunk,
} from './operations';

// Імпорт асинхронної операції logOutThunk (logout користувача) - з файлу /auth/operations.js
import { logOutThunk } from '../auth/operations';

// Створюємо slice для управління станом контактів
const contactsSlice = createSlice({
  name: 'contacts', // Ім'я slice
  // Початковий стан
  initialState: {
    items: [], // Початковий стан списку контактів
    isLoading: false, // Стан завантаження
    isError: null, // Повідомлення про помилку
  },
  // 'extraReducers' для обробки 'зовнішніх екшенів' з асинхронних операцій
  // Створених через createAsyncThunk (в файлі /contacts/operations.js)
  extraReducers: builder => {
    // 'builder' для додавання обробників різних thunk-дій
    builder
      // Обробка fulfilled-стану запиту для отримання всіх контактів (при рендері ContactsPage)
      // 'fetchContactsThunk' - з файла /contacts/operations.js
      // 'addCase' - для обробки конкретного екшену
      .addCase(fetchContactsThunk.fulfilled, (state, action) => {
        state.items = action.payload; // Зберігаємо отримані контакти
        state.isLoading = false; // Оновлення стану завантаження
        state.isError = false; // Оновлення стану помилки
      })
      // Обробка fulfilled-стану запиту для додавання нового контакту
      // 'addContactThunk' - з файлу /contacts/operations.js
      .addCase(addContactThunk.fulfilled, (state, action) => {
        state.items.push(action.payload); // Додаємо новий контакт у список
        state.isLoading = false;
        state.isError = false;
      })
      // Обробка fulfilled-стану запиту для видалення контакту
      // 'deleteContactThunk' - з файлу /contacts/operations.js
      .addCase(deleteContactThunk.fulfilled, (state, action) => {
        state.items = state.items.filter(item => item.id !== action.payload.id); // Видаляємо контакт із масиву за його ID
        state.isLoading = false;
        state.isError = false;
      })
      // Обробка fulfilled-стану запиту для редагування контакту
      // 'editContactThunk' - з файлу /contacts/operations.js
      .addCase(editContactThunk.fulfilled, (state, action) => {
        const contact = state.items.find(item => item.id === action.payload.id);
        contact.name = action.payload.name;
        contact.number = action.payload.number;
        state.isLoading = false;
        state.isError = false;
      })
      // Обробка fulfilled-стану для виходу з системи
      .addCase(logOutThunk.fulfilled, state => {
        state.items = []; // Очищаємо список контатів в Redux-стані
        state.isLoading = false; // Оновлення стану завантаження
        state.isError = null; // Оновлення стану помилки
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
