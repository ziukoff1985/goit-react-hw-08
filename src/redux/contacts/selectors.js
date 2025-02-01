import { createSelector } from '@reduxjs/toolkit';
import { selectNameFilter } from '../filters/selectors';

export const selectContacts = state => state.contacts.items;

export const selectIsLoading = state => state.contacts.isLoading;

export const selectIsError = state => state.contacts.isError;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, nameFilter) => {
    return contacts.filter(
      contact =>
        contact.name.toLowerCase().includes(nameFilter.toLowerCase()) || // фільтруємо по імені
        contact.number.includes(nameFilter) // фільтруємо по номеру
    );
  }
);
