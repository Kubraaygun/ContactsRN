//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {getInitials} from '../../utils/function';
import {Colors} from '../../theme/colors';

// create a component
const Avatar = ({name, surname}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{getInitials(name, surname)}</Text>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
    margin: 5,
    borderRadius: 100,
    width: 55,
    height: 55,
  },
  name: {
    color: Colors.WHITE,
    fontWeight: 'bold',
    fontSize: 20,
  },
});

//make this component available to the app
export default Avatar;
