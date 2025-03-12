//import liraries
import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import {Input, Button} from '@ui-kitten/components';
import {defaultScreenStyle} from '../../styles/defaultScreenStyle';
import {Formik} from 'formik';
import {newContactSchema} from '../../utils/schema';

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
          validationSchema={newContactSchema}
          onSubmit={values => console.log(values)}>
          {({handleChange, handleBlur, handleSubmit, values, errors}) => (
            <View>
              <Input
                style={styles.input}
                size="medium"
                placeholder="Name"
                label="Name"
                onChangeText={handleChange('name')}
                onBlur={handleBlur('name')}
                value={values.name}
                caption={ErrorMessage.name}
              />
              <Input
                style={styles.input}
                size="medium"
                placeholder="Surname"
                label="Surname"
                onChangeText={handleChange('surname')}
                onBlur={handleBlur('surname')}
                value={values.surname}
              />
              <Input
                style={styles.input}
                size="medium"
                placeholder="Email"
                label="Email"
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
              />
              <Input
                style={styles.input}
                size="medium"
                placeholder="Phone"
                label="Phone"
                onChangeText={handleChange('phone')}
                onBlur={handleBlur('phone')}
                value={values.phone}
              />
              <Input
                style={styles.input}
                size="medium"
                placeholder="Adress"
                label="Adress"
                onChangeText={handleChange('adress')}
                onBlur={handleBlur('adress')}
                value={values.adress}
              />
              <Input
                style={styles.input}
                size="medium"
                placeholder="Job"
                label="Job"
                onChangeText={handleChange('job')}
                onBlur={handleBlur('job')}
                value={values.job}
              />

              <Button style={styles.button} onPress={handleSubmit}>
                Save
              </Button>
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
  button: {
    marginVertical: 30,
  },
});

//make this component available to the app
export default AddContact;
