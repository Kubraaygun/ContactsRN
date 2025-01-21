import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {defaultScreenStyle} from '../../styles/defaultScreenStyle';
import SQLite from 'react-native-sqlite-storage';
const db = SQLite.openDatabase({
  name: 'ContactsDatabase',
});

const Contacts = () => {
  const [users, setUsers] = useState();
  const createContactsTable = () => {
    db.transaction(txn => {
      txn.executeSql(
        'CREATE TABLE IF NOT EXISTS users   (id INTEGER PRIMARY KEY AUTOINCREMENT, name VARCHAR(100), surname VARCHAR(500), phone INTEGER, email name VARCHAR(500), adress name VARCHAR(500), job name VARCHAR(500))',
        [],
        (sqlTxn, res) => console.log('Table created'),
        error => console.log('hata', error.message),
      );
    });
  };
  const getContacts = () => {
    db.transaction(txn => {
      txn.executeSql('SELECT * FROM users', [], (sqlTxn, res) => {
        console.log('gelen veri', res.rows.length);
        if (res.rows.length > 0)
          for (let i = 0; i < res.rows.length; i++) {
            let item = res.rows.item(i);
            setUsers([...users, item]);
          }
        console.log('gelen veriler', res.rows),
          error => console.log('hata', error.message);
      });
    });
  };

  useEffect(() => {
    createContactsTable();
    getContacts();
  }, []);
  return (
    <View style={defaultScreenStyle.container}>
      <FlatList
        data={users}
        renderItem={({item}) => <Text>{item.name}</Text>}
      />
    </View>
  );
};

export default Contacts;
