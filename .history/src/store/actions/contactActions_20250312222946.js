import {createAsyncThunk} from '@reduxjs/toolkit';
import SQLite from 'react-native-sqlite-storage';
const db = SQLite.openDatabase({
  name: 'ContactsDatabase',
});

const deleteContact = createAsyncThunk('contact/deleteContact', async () => {
  try {
  } catch (error) {}
});
export {deleteContact};
