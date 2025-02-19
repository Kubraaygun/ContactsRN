//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {defaultScreenStyle} from '../../styles/defaultScreenStyle';
import Avatar from '../../components/contacts/avatar';
import {convertFullName} from '../../utils/function';
import {height, width} from '../../utils/contants';
import {Colors} from '../../theme/colors';

// create a component
const ContactDetail = ({route}) => {
  const {contact} = route.params;

  return (
    <View style={defaultScreenStyle.container}>
      <ScrollView>
        <View style={styles.userContainer}>
          <Avatar name={contact?.name} surname={contact?.surname} />
          <Text style={styles.fullName}>
            {convertFullName(contact?.name, contact?.surname)}
          </Text>
          <Text style={styles.job}>{contact?.job}</Text>
        </View>
        <View style={styles.buttonContainer}>
          <Avatar name={contact?.name} surname={contact?.surname} />
          <Text>{convertFullName(contact?.name, contact?.surname)}</Text>
        </View>
      </ScrollView>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  userContainer: {
    alignItems: 'center',
    height: height * 0.15,
    justifyContent: 'center',
  },
  buttonContainer: {
    alignItems: 'center',
    height: height * 0.15,
    backgroundColor: 'gray',
  },
  fullName: {
    fontSize: 18,
    fontWeight: '700',
  },
  job: {
    color: Colors.SOFTGRAY,
  },
});

//make this component available to the app
export default ContactDetail;
