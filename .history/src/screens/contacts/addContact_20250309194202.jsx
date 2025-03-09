//import liraries
import React, {Component} from 'react';
import {View, StyleSheet, ScrollView, TextInput, Button} from 'react-native';
import {Input, InputProps} from '@ui-kitten/components';
import {defaultScreenStyle} from '../../styles/defaultScreenStyle';
import {Formik} from 'formik';

// create a component
const AddContact = () => {
  return (
    <View style={defaultScreenStyle.container}>
      <ScrollView>
        <Formik
          initialValues={{
            name: '',
            surname: '',
            email: '',
            phone: '',
            adress: '',
            job: '',
          }}
          onSubmit={values => console.log(values)}>
          {({handleChange, handleBlur, handleSubmit, values}) => (
            <View>
              <Input
                style={styles.input}
                size="medium"
                placeholder="Name"
                label="Name"
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
              />

              <Button onPress={handleSubmit} title="Submit" />
            </View>
          )}
        </Formik>
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
  input: {
    marginVertical: 10,
  },
});

//make this component available to the app
export default AddContact;
