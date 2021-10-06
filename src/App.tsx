import {DefaultTheme} from '@react-navigation/native';
import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import StartupNavigation from './navigation/startup.navigation';
import DropdownAlert from 'react-native-dropdownalert';
import {setDropdownRef} from './services/notification.service';

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
      <DropdownAlert
        updateStatusBar={false}
        closeInterval={3000}
        ref={ref => setDropdownRef(ref)}
      />
    </SafeAreaProvider>
  );
};

export default App;
