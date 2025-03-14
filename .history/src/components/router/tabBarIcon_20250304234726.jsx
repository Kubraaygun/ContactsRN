//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {CONTACTS, FAVORITES, RESENTS} from '../../utils/routes';
import Ionicons from '@react-native-vector-icons/ionicons';

// create a component
const TabBarIcon = ({name, focused, size, color}) => {
  switch (name) {
    case RESENTS:
      return <Ionicons name="clock" size={size} color={color} />;
    case FAVORITES:
      return <Ionicons name="star" size={size} color={color} />;
    case CONTACTS:
      return <Ionicons name="user" size={size} color={color} />;
    default:
      return <Ionicons name="start" size={size} color={color} />;
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
