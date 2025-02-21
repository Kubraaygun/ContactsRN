//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {defaultScreenStyle} from '../../styles/defaultScreenStyle';
import SQLite from 'react-native-sqlite-storage';

const db = SQLite.openDatabase({
  name: 'ContactsDatabase',
});
// create a component
const Resents = () => {
  const getResents = () => {
    db.transaction(txn => {
      txn.executeSql('SELECT * FROM resents', [], (sqlTxn, res) => {
        if (res.rows.length > 0) {
          let users = [];
          for (let i = 0; i < res.rows.length; i++) {
            let item = res.rows.item(i);
            users.push(item);
          }
          setUsers(users);
        }

        error => console.log('hata', error.message);
      });
    });
  };
  return (
    <View style={defaultScreenStyle.container}>
      <Text>resents</Text>
    </View>
  );
};

//make this component available to the app
export default Resents;
