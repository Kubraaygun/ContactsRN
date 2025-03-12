import {createAsyncThunk} from '@reduxjs/toolkit';
import SQLite from 'react-native-sqlite-storage';
const db = SQLite.openDatabase({
  name: 'ContactsDatabase',
});

const deleteContact = createAsyncThunk(
  'contact/deleteContact',
  async contact_id => {
    try {
      db.transaction(txn => {
        txn.executeSql(`'DELETE FROM users WHERE'`, [], (sqlTxn, res) => {
          if (res.rows.length > 0) {
            let users = [];
            for (let i = 0; i < res.rows.length; i++) {
              let item = res.rows.item(i);
              users.push(item);
            }
            dispatch(setContacts(users));
          }

          error => {
            console.log('hata', error.message);
            dispatch(setPending(false));
          };
        });
      });
    } catch (error) {}
  },
);
export {deleteContact};
