//import liraries
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import RootNavigator from './src/router/rootNavigator';
import {Provider} from 'react-redux';

// create a component
const App = () => {
  return (
    <Provider>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
