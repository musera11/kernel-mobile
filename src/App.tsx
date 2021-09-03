import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import React from 'react';
import MainNavigation from './navigation/main.navigation';

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#fff',
  },
};

const App = () => {
  return (
    <NavigationContainer theme={MyTheme}>
      <MainNavigation />
    </NavigationContainer>
  );
};

export default App;
