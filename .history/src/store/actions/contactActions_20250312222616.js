import {createAsyncThunk} from '@reduxjs/toolkit';

const db = SQLite.openDatabase({
  name: 'ContactsDatabase',
});

const deleteContact = createAsyncThunk('contact/deleteContact', async () => {});
