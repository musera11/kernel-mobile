import {DefaultTheme} from '@react-navigation/native';
import React from 'react';
import {StyleSheet} from 'react-native';
import DropdownAlert from 'react-native-dropdownalert';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import StartupNavigation from './navigation/startup.navigation';
import {COLORS1} from './services/colors.service';
import {F_SEMI_BOLD} from './services/fonts.service';
import {initLocalize} from './services/localize.service';
import {setDropdownRef} from './services/notification.service';

export let loaderRef: any;
initLocalize();

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
    fontFamily: F_SEMI_BOLD,
    fontSize: 15,
  },
});
