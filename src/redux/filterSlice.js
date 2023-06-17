import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    editFilter(state, action) {
      return action.payload;
    },
  },
});

export const { editFilter } = filterSlice.actions;
export const contactsFilter = filterSlice.reducer;
