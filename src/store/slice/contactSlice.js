import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  contacts: [],
};

const contactSlice = createSlice({
  name: 'contacts',
});
