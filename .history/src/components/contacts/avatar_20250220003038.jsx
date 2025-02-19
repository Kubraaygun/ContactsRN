//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {getInitials} from '../../utils/function';
import {Colors} from '../../theme/colors';
import {sizes} from '../../utils/contants';

// create a component
const Avatar = ({name, surname, size = sizes.MEDIUM}) => {
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
    backgroundColor: Colors.SOFTGRAY,
    margin: 5,
    borderRadius: 100,
  },
  name: {
    color: Colors.BLACK,
    fontWeight: 'bold',
    fontSize: 18,
  },
});

//make this component available to the app
export default Avatar;
