//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {RESENTS} from '../../utils/routes';
import Icon from 'react-native-vector-icons/commons';

// create a component
const TabBarIcon = ({name, focused, size, color}) => {
  switch (name) {
    case RESENTS:
      <Icon name="ios-person" size={30} color="#4F8EF7" />;
      return;

    default:
      return;
      <Icon name="ios-person" size={30} color="#4F8EF7" />;
  }
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
});

//make this TabBarIcon available to the app
export default TabBarIcon;
