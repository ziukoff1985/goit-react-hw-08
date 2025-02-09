// ❗❗❗ Селектори для отримання частин стану `contacts` у Redux

// Функція для створення мемоізованих селекторів
import { createSelector } from '@reduxjs/toolkit';

// Імпорт селектору для отримання значення фільтру по імені
import { selectNameFilter } from '../filters/selectors';

// Простий Селектор для отримання списку контактів.
export const selectContacts = state => state.contacts.items;

// Простий селектор для отримання стану 'isLoading'
export const selectIsLoading = state => state.contacts.isLoading;

// Простий селектор для отримання стану 'isError'
export const selectIsError = state => state.contacts.isError;

// Мемоізований селектор для отримання видимих контактів на основі фільтра
export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter], // Вхідні селектори.
  (contacts, nameFilter) => {
    // Фільтруємо контакти на основі введеного фільтру.
    return contacts.filter(
      contact =>
        contact.name.toLowerCase().includes(nameFilter.toLowerCase()) || // фільтруємо по імені
        contact.number.includes(nameFilter) // фільтруємо по номеру
    );
  }
);
