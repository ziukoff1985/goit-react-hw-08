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
// Він буде оновлюватися лише тоді, коли зміниться список контактів або фільтр імені
export const selectFilteredContacts = createSelector(
  // Масив вхідних селекторів (викликаються автоматично "під капотом"):
  // - selectContacts повертає масив контактів зі стану Redux
  // - selectNameFilter повертає текст фільтра (рядок з інпуту)
  [selectContacts, selectNameFilter],
  // Ця функція приймає РЕЗУЛЬТАТИ селекторів (не самі селектори):
  // Тобто `contacts` — масив контактів, `nameFilter` — рядок з фільтру
  (contacts, nameFilter) => {
    // Фільтруємо контакти на основі введеного фільтру
    // Повертаємо тільки ті контакти, які:
    // - або містять nameFilter у імені (без урахування регістру)
    // - або містять nameFilter у номері
    return contacts.filter(
      contact =>
        contact.name.toLowerCase().includes(nameFilter.toLowerCase()) || // фільтруємо по імені
        contact.number.includes(nameFilter) // фільтруємо по номеру
    );
  }
);
