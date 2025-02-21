//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Avatar from '../../components/contacts/avatar';

// create a component
const Calling = ({route}) => {
  const {contact} = route.params;
  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <Avatar name={contact.name} surname={contact.surname} />
      </View>

      <View style={styles.container}></View>
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
  },
});

//make this component available to the app
export default Calling;
