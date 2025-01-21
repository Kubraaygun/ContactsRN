//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {CONTACTS, FAVORITES, RESENTS} from '../../utils/routes';
import Icon from '@react-native-vector-icons/evil-icons';

// create a component
const TabBarIcon = ({name, focused, size, color}) => {
  switch (name) {
    case RESENTS:
      return <Icon name="clock" size={30} color={color} />;
    case FAVORITES:
      return <Icon name="user" size={30} color={color} />;
    case CONTACTS:
      return <Icon name="ios-person" size={30} color={color} />;
    default:
      return <Icon name="ios-person" size={30} color={color} />;
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
