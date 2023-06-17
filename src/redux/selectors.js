import { createSelector } from '@reduxjs/toolkit';

export const getContacts = state => state.contacts.items;
export const getFilter = state => state.filter;

export const selectFilterContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filter) => {
      return contacts.filter(item =>
        item.name.toLowerCase().includes(filter.toLowerCase().trim())
      );
  }
);
