import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {defaultScreenStyle} from '../../styles/defaultScreenStyle';
import SQLite from 'react-native-sqlite-storage';
const db = SQL.openDatabase({
  name: 'ContactsDatabase',
});

const Contacts = () => {
  return (
    <View style={defaultScreenStyle.container}>
      <Text>Contact</Text>
    </View>
  );
};

export default Contacts;
