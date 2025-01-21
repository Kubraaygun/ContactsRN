//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {convertFullName} from '../../utils/function';
import {Colors} from '../../theme/colors';

// create a component
const ContackItem = ({item}) => {
  return (
    <View style={styles.container}>
      <View></View>
      <View>
        <Text style={styles.name}>
          {convertFullName(item.name, item.surname)}
        </Text>
        <Text style={styles.job}>{item.job}</Text>
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: '700',
    margin: 5,
    color: Colors.BLACK,
  },
  job: {
    fontSize: 14,
    color: Colors.GRAY,
    margin: 5,
  },
  infoContainer: {
    flex: 4,
  },
});

//make this component available to the app
export default ContackItem;
