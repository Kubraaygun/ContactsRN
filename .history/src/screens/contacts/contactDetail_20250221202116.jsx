//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {defaultScreenStyle} from '../../styles/defaultScreenStyle';
import Avatar from '../../components/contacts/avatar';
import {convertFullName} from '../../utils/function';
import {height, sizes, width} from '../../utils/contants';
import {Colors} from '../../theme/colors';
import CircleIconButton from '../../components/ui/circleIconButton';
import Icon from 'react-native-vector-icons/Ionicons';

// create a component
const ContactDetail = ({route}) => {
  const {contact} = route.params;

  return (
    <View style={defaultScreenStyle.container}>
      <ScrollView>
        <View style={styles.userContainer}>
          <Avatar
            name={contact?.name}
            surname={contact?.surname}
            size={sizes.LARGE}
          />
          <Text style={styles.fullName}>
            {convertFullName(contact?.name, contact?.surname)}
          </Text>
          <Text style={styles.job}>{contact?.job}</Text>
        </View>
        <View style={styles.buttonContainer}>
          <CircleIconButton
            icon={
              <Icon name="chatbox-ellipses" size={26} color={Colors.WHITE} />
            }
            color={Colors.GREEN}
          />
          <CircleIconButton
            icon={<Icon name="add" size={30} color={Colors.WHITE} />}
            color={Colors.PURPLE}
          />
          <CircleIconButton
            icon={<Icon name="call" size={30} color={Colors.WHITE} />}
            color={Colors.BLUE}
          />
        </View>
      </ScrollView>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  userContainer: {
    alignItems: 'center',
    height: height * 0.2,
    justifyContent: 'center',
  },
  buttonContainer: {
    alignItems: 'center',
    height: height * 0.1,
    justifyContent: 'space-evenly',
    flexDirection: 'row',
  },
  fullName: {
    fontSize: 18,
    fontWeight: '700',
  },
  job: {
    color: Colors.GRAY,
    fontSize: 16,
  },
});

//make this component available to the app
export default ContactDetail;
