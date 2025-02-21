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
  return (
    <View style={defaultScreenStyle.container}>
      <Text>resents</Text>
    </View>
  );
};

//make this component available to the app
export default Resents;
