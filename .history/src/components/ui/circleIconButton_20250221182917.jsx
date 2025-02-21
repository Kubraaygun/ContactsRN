//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import {height, width} from '../../utils/contants';
import {Colors} from '../../theme/colors';

// create a component
const CircleIconButton = ({color = Colors.SOFTGRAY}) => {
  return (
    <Pressable style={styles.container}>
      <Text>B</Text>
    </Pre>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: width * 0.13,
    width: width * 0.13,
    borderRadius: width,
  },
});

//make this component available to the app
export default CircleIconButton;
