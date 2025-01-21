//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {getInitials} from '../../utils/function';

// create a component
const Avatar = ({name, surname}) => {
  return (
    <View style={styles.container}>
      <Text>{getInitials(name, surname)}</Text>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
    margin: 5,
    borderRadius: 50,
  },
});

//make this component available to the app
export default Avatar;
