//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Avatar from '../../components/contacts/avatar';
import {sizes} from '../../utils/contants';
import {convertFullName} from '../../utils/function';
import {Colors} from '../../theme/colors';
import CircleIconButton from '../../components/ui/circleIconButton';

// create a component
const Calling = ({route}) => {
  const {contact} = route.params;
  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <Avatar
          name={contact.name}
          surname={contact.surname}
          size={sizes.LARGE}
        />
        <Text style={styles.fullName}>
          {convertFullName(contact?.name, contact?.surname)}
        </Text>
      </View>

      <View style={styles.buttons}>
        <CircleIconButton />
        <CircleIconButton />
      </View>
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
  fullName: {
    fontSize: 24,
    fontWeight: '700',
    marginTop: 20,
    color: Colors.WHITE,
  },
  buttons: {
    justifyContent: 'center',
    flexDirection: 'row',
    marginBottom: 20,
    paddingHorizontal: 20,
  },
});

//make this component available to the app
export default Calling;
