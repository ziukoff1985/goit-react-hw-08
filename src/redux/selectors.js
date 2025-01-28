// Функція для створення мемоізованих селекторів
import { createSelector } from '@reduxjs/toolkit';

// Простий Селектор для отримання списку контактів.
export const selectContacts = state => state.contacts.items;

// Простий Селектор для отримання значення фільтру по імені.
export const selectNameFilter = state => state.filters.name;

// Простий селектор для отримання стану 'isLoading'
export const selectIsLoading = state => state.contacts.isLoading;

// Простий селектор для отримання стану 'isError'
export const selectIsError = state => state.contacts.isError;

// Мемоізований селектор для отримання видимих контактів на основі фільтра
export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter], // Вхідні селектори.
  (contacts, nameFilter) => {
    // Фільтруємо контакти на основі введеного фільтру.
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(nameFilter.toLowerCase())
    );
  }
);
