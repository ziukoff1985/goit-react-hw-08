// Функція для створення Redux store з Redux Toolkit
import { configureStore } from '@reduxjs/toolkit';

// Редюсери для різних частин стану (з файлів слайсів)
import { authReducer } from './auth/slice';
import { contactsReducer } from './contacts/slice';
import { filtersReducer } from './filters/slice';

// Імпорт компонентів бібліотеки 'Redux-Persist' (збереження в Local Storage), з бібліотеки!!!
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

// Імпорт механізму для збереження стану у локальному сховищі браузера, з бібліотеки!!!
import storage from 'redux-persist/lib/storage';

// Налаштовуємо `persistConfig` для авторизаційного стану (auth), з бібліотеки!!!
const persistConfig = {
  key: 'auth-data', // Ключ для збереження стану в localStorage
  version: 1, // Версія збереженого стану
  whitelist: ['token'], // Визначає, які поля з `authReducer` потрібно зберігати -> у нас `token` зберігається за допомогою `redux-persist` у `localStorage`
  storage, // Використовуємо `localStorage` для збереження
};

// Обгортаємо `authReducer` у `persistReducer`, щоб зберігати авторизаційні дані
const persistedReducer = persistReducer(persistConfig, authReducer);

// Створюємо глобальне сховище стану
export const store = configureStore({
  reducer: {
    contacts: contactsReducer, // Редюсер для контактів
    filters: filtersReducer, // Редюсер для фільтрів
    auth: persistedReducer, // Редюсер для авторизації, ❗❗❗ який зберігає дані у локальному сховищі
  },
  // Налаштовуємо 'middleware' для Redux store, щоб ігнорувати певні дії redux-persist, з бібліотеки!!!
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

// Створюємо persistor для відновлення стану з redux-persist, з бібліотеки!!!
export const persistor = persistStore(store);
