//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import {height, width} from '../../utils/contants';
import {Colors} from '../../theme/colors';

// create a component
const CircleIconButton = props => {
  const {color = Colors.SOFTGRAY, icon} = props;
  return (
    <Pressable {...props} style={[styles.container, {backgroundColor: color}]}>
      {icon}
    </Pressable>
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
