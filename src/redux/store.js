import { configureStore } from '@reduxjs/toolkit';

import { authReducer } from './auth/authSlice';
import { contactsReducer } from './contacts/contactsSlice';
import { filtersReducer } from './filters/filtersSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filters: filtersReducer,
    auth: authReducer,
  },
});
