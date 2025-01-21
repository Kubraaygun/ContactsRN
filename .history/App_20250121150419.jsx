//import liraries
import {NavigationContainer} from '@react-navigation/native';
import React, {Component} from 'react';

import RootNavigator from './src/router/rootNavigator';

// create a component
const App = () => {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
};

export default App;
