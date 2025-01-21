//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import {convertFullName} from '../../utils/function';
import {Colors} from '../../theme/colors';
import Avatar from './avatar';

// create a component
const ContackItem = ({item}) => {
  return (
    <View style={styles.container}>
      <View style={styles.avatarContainer}>
        <Avatar name={item.name} surname={item.surname} />
      </View>
      <View style={styles.infoContainer}>
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
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
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
  avatarContainer: {
    flex: 1,
  },
});

//make this component available to the app
export default ContackItem;
