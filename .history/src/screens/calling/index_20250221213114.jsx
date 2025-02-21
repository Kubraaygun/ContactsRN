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
      <View style={styles.infoContainer}>
        <Avatar
          name={contact.name}
          surname={contact.surname}
          size={sizes.LARGE}
        />
        <Text style={styles.fullName}>
          {convertFullName(contact?.name, contact?.surname)}
        </Text>
      </View>

      <View style={{flex: 1}}>
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

    backgroundColor: Colors.BLACK,
  },
  fullName: {
    fontSize: 24,
    fontWeight: '700',
    marginTop: 20,
    color: Colors.WHITE,
  },
  buttons: {
    flex: 1,
    justifyContent: 'space-evenly',
    flexDirection: 'row',
  },
  infoContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

//make this component available to the app
export default Calling;
