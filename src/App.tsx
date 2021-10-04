import {DefaultTheme} from '@react-navigation/native';
import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import StartupNavigation from './navigation/startup.navigation';

export let loaderRef: any;

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#fff',
  },
};

const App = () => {
  return (
    <SafeAreaProvider>
      <StartupNavigation theme={MyTheme} />
    </SafeAreaProvider>
  );
};

export default App;
