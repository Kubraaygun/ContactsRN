//import liraries
import React, {useEffect} from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import Avatar from '../contacts/avatar';
import {sizes} from '../../utils/contants';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {convertFullName} from '../../utils/function';
import SQLite from 'react-native-sqlite-storage';

const db = SQLite.openDatabase({
  name: 'ContactsDatabase',
});

// create a component
const ResentItem = ({item}) => {
  const getUser = () => {
    db.transaction(txn => {
      txn.executeSql(
        `SELECT * FROM users WHERE  id=${item.resent_id}`,
        [],
        (sqlTxn, res) => {
          console.log(res.rows.item(i));
        },
        error => console.log('hata', error.message),
      );
    });
  };
  useEffect(() => {
    getUser();
  }, []);
  return (
    <Pressable style={styles.container}>
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
