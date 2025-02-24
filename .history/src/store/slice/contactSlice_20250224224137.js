import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  contacts: [],
  pending: true,
};

const contactSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    setContacts: (state, action) => {
      state.contacts = action.payload;
    },
    setPending: (state, action) => {
      state.pending = true;
    },
  },
});

export const {setContacts, setPending} = contactSlice.actions;
export default contactSlice.reducer;
