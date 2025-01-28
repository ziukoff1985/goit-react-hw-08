// 'createSlice' для створення слайсу
import { createSlice } from '@reduxjs/toolkit';

// Створення slice для стану фільтрів
const filtersSlice = createSlice({
  name: 'filters', // Ім'я slice
  initialState: {
    name: '', // Початкове значення фільтра — порожній рядок
  },
  reducers: {
    // Редюсер для оновлення фільтра за ім'ям
    changeFilter: (state, action) => {
      // Оновлюємо значення фільтра (в action.payload - те що вів користувач в інпут)
      state.name = action.payload;
    },
  },
});

// Експортуємо action для зміни фільтра
export const { changeFilter } = filtersSlice.actions;

// Експортуємо редюсер для використання у store
export const filtersReducer = filtersSlice.reducer;
