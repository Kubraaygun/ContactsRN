import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {defaultScreenStyle} from '../../styles/defaultScreenStyle';
import SQLite from 'react-native-sqlite-storage';
const db = SQLite.openDatabase({
  name: 'ContactsDatabase',
});

const Contacts = () => {
  const createContactsTable = () => {
    db.transaction(tx => {
      txn.executeSql(
        'CREATE TABLE IF NOT EXISTS users   (id INTEGER PRIMARY KEY AUTOINCREMENT, name VARCHAR(100), surname VARCHAR(500), phone INTEGER, email name VARCHAR(500), adress name VARCHAR(500), job name VARCHAR(500))',
        [],
        (sqlTxn, res) => console.log('Table created'),
      );
    });
  };
  return (
    <View style={defaultScreenStyle.container}>
      <Text>Contact</Text>
    </View>
  );
};

export default Contacts;
