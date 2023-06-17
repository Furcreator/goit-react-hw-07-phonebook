import { createAsyncThunk } from '@reduxjs/toolkit';
import { default as axios } from 'axios';

axios.defaults.baseURL = 'https://648d8c8b2de8d0ea11e7f9d7.mockapi.io';
export const fetchData = createAsyncThunk(
  'contacts/fetchData',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get('/contacts');
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (wordId, { rejectWithValue }) => {
    try {
      const response = await axios.delete(`/contacts/${wordId}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (word, { rejectWithValue }) => {
    try {
      const response = await axios.post('/contacts', word);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
