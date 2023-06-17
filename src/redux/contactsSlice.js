const { createSlice } = require('@reduxjs/toolkit');

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
  },
  reducers: {
    addContacts(state, actions) {
      return {
        contacts: [...state.contacts, actions.payload],
      };
    },
    deleteContact(state, action) {
      return {
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        ),
      };
    },
  },
});

export const contactsReducer = contactsSlice.reducer;
export const { addContacts, deleteContact } = contactsSlice.actions;
