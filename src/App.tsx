import {DefaultTheme} from '@react-navigation/native';
import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import StartupNavigation from './navigation/startup.navigation';
import DropdownAlert from 'react-native-dropdownalert';
import {setDropdownRef} from './services/notification.service';
import {StyleSheet} from 'react-native';
import {COLORS1} from './services/colors.service';
import {WS_SEMI_BOLD} from './services/fonts.service';

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
        titleStyle={styles.titleStyle}
      />
    </SafeAreaProvider>
  );
};

export default App;

const styles = StyleSheet.create({
  titleStyle: {
    marginTop: 10,
    color: COLORS1.white,
    fontFamily: WS_SEMI_BOLD,
    fontSize: 15,
  },
});
