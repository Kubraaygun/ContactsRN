import {createAsyncThunk} from '@reduxjs/toolkit';
import SQLite from 'react-native-sqlite-storage';
const db = SQLite.openDatabase({
  name: 'ContactsDatabase',
});

const deleteContact = createAsyncThunk('contact/deleteContact', async () => {
  try {
    db.transaction(txn => {
      txn.executeSql(
        'DELETE INTO users (name, surname, phone, email, adress, job) VALUES (?,?,?,?,?,?)',
        [
          values.name,
          values.surname,
          values.phone,
          values.email,
          values.adress,
          values.job,
        ],
        (sqlTxn, res) => console.log('New contact inserted'),

        error => console.log('hata', error.message),
      );
    });
  } catch (error) {}
});
export {deleteContact};
