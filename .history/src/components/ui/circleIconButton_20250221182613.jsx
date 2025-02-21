//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {height, width} from '../../utils/contants';

// create a component
const CircleIconButton = () => {
  return (
    <View style={styles.container}>
      <Text>MyComponent</Text>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
    height: width * 0.12,
    width: width * 0.12,
  },
});

//make this component available to the app
export default CircleIconButton;
