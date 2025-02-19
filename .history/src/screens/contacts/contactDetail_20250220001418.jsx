//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {defaultScreenStyle} from '../../styles/defaultScreenStyle';
import Avatar from '../../components/contacts/avatar';
import {convertFullName} from '../../utils/function';

// create a component
const ContactDetail = ({route}) => {
  const {contact} = route.params;
  return (
    <View style={defaultScreenStyle.container}>
      <ScrollView>
        <View style={styles.userContainer}>
          <Avatar name={contact?.name} surname={contact?.surname} />
        </View>
        <Text>{convertFullName(contact?.name, contact?.surname)}</Text>
      </ScrollView>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  userContainer: {},
});

//make this component available to the app
export default ContactDetail;
