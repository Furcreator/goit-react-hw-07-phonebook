import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contactsSlice';
import { contactsFilter } from './filterSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: contactsFilter,
  },
});
