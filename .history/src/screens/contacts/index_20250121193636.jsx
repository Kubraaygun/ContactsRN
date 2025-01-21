import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {defaultScreenStyle} from '../../styles/defaultScreenStyle';
import SQLite from 'react-native-sqlite-storage';
import Icon from '@react-native-vector-icons/evil-icons';
const db = SQLite.openDatabase({
  name: 'ContactsDatabase',
});

const Contacts = () => {
  const [users, setUsers] = useState([]);
  const createContactsTable = () => {
    db.transaction(txn => {
      txn.executeSql(
        'CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, name VARCHAR(100), surname VARCHAR(500), phone INTEGER, email VARCHAR(500), adress VARCHAR(500), job VARCHAR(500))',
        [],
        (sqlTxn, res) => console.log('Table created'),
        error => console.log('hata', error.message),
      );
    });
  };
  const addNewContact = (name, surname, phone, email, adress, job) => {
    db.transaction(txn => {
      txn.executeSql(
        'INSERT INTO users (name, surname, phone, email, adress, job) VALUES (?,?,?,?,?,?)',
        [name, surname, phone, email, adress, job],
        (sqlTxn, res) => {
          console.log('New contact inserted');
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
        if (res.rows.length > 0) {
          let users = [];
          for (let i = 0; i < res.rows.length; i++) {
            let item = res.rows.item(i);
            console.log(item);
            users.push(item);
          }
          setUsers(users);
        }

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
        renderItem={({item}) => (
          <Text>
            {item.name} {item.surname}
          </Text>
        )}
      />
      <TouchableOpacity
        onPress={() =>
          addNewContact(
            'asli',
            'tekin',
            '33333a33',
            'kubraaygun@ads.com',
            'Adres asdreadsa dsa',
            'softrawe',
          )
        }
        style={{
          position: 'absolute',
          right: 20,
          bottom: 20,
          backgroundColor: 'green',
          borderRadius: 50,
          padding: 20,
        }}>
        <Icon name="plus" size={30} color={'black'} />
      </TouchableOpacity>
    </View>
  );
};

export default Contacts;
