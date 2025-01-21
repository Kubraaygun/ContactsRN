//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

// create a component
const TabBarIcon = ({name, focused, size, color}) => {
  return (
    <View style={styles.container}>
      <Text>{name}</Text>
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

//make this TabBarIcon available to the app
export default TabBarIcon;
