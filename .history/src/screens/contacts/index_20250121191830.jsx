import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {defaultScreenStyle} from '../../styles/defaultScreenStyle';
import SQLite from 'react-native-sqlite-storage';
import Icon from '@react-native-vector-icons/evil-icons';
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
  const AddNewContack = (name, surname, phone, email, adress, job) => {
    db.transaction(txn => {
      txn.executeSql(
        'INSERT INTO users (name, surname, phone, email, adress, job) VALUES (?,?,?,?,?,?)',
        [
          'John Doe',
          'Smith',
          5555555555,
          'john.doe@example.com',
          '123 Main St',
          'Developer',
        ],
        (sqlTxn, res) => {
          console.log('New contact inserted', res.insertId);
          getContacts();
        },
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
      <TouchableOpacity
        style={{
          position: 'absolute',
          right: 20,
          bottom: 20,
          backgroundColor: 'white',
          borderRadius: 50,
          padding: 20,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Icon name="plus" size={50} color={'black'} />
      </TouchableOpacity>
    </View>
  );
};

export default Contacts;
