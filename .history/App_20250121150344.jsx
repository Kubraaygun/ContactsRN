//import liraries
import {NavigationContainer} from '@react-navigation/native';
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import RootNavigator from './src/router/rootNavigator';

// create a component
const App = () => {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffff',
  },
});

//make this component available to the app
export default App;
