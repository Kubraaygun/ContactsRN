//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import Avatar from '../contacts/avatar';
import {sizes} from '../../utils/contants';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {convertFullName} from '../../utils/function';

// create a component
const ResentItem = ({item}) => {
  return (
    <Pressable
      onPress={() => navigation.navigate(CONTACTDETAIL, {contact: item})}
      style={styles.container}>
      <View style={styles.avatarContainer}>
        <Avatar name={item.name} surname={item.surname} size={sizes.SMALL} />
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.name}>
          {convertFullName(item.name, item.surname)}
        </Text>
        <Text style={styles.job}>{item.job}</Text>
      </View>
    </Pressable>
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
    justifyContent: 'center',
    alignItems: 'center',
  },
});

//make this component available to the app
export default ResentItem;
