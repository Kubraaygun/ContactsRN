//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {defaultScreenStyle} from '../../styles/defaultScreenStyle';
import Avatar from '../../components/contacts/avatar';

// create a component
const ContactDetail = ({route}) => {
  const {contact} = route.params;
  return (
    <View style={defaultScreenStyle.container}>
      <ScrollView>
        <View>
          <Avatar name={contact.name} />
        </View>
        <Text>{contact?.name}</Text>
      </ScrollView>
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

//make this component available to the app
export default ContactDetail;
