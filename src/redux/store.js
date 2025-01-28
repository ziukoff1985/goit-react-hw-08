// configureStore - функція для створення Redux-стору
import { configureStore } from '@reduxjs/toolkit';

// Ред'юсер для контактів
import { contactsReducer } from './contactsSlice';

// Ред'юсер для фільтрів
import { filtersReducer } from './filtersSlice';

// Створення Redux store з підключенням редюсерів
export const store = configureStore({
  reducer: {
    contacts: contactsReducer, // Редюсер для управління станом контактів
    filters: filtersReducer, // Редюсер для управління станом фільтру
  },
});
