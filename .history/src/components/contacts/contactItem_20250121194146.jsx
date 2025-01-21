//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

// create a component
const ContackItem = ({item}) => {
  return (
    <View style={styles.container}>
      <View></View>
      <View>
        <Text>{item.name}</Text>
        <Text>{item.job}</Text>
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

//make this component available to the app
export default ContackItem;
