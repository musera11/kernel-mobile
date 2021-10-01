import React from 'react';
import {NavigationContainer, Theme} from '@react-navigation/native';
import AuthNavigation from './auth.navigation';

const StartupNavigation: React.FC<{theme: Theme | undefined}> = ({theme}) => {
  return (
    <NavigationContainer theme={theme}>
      <AuthNavigation />
    </NavigationContainer>
  );
};

export default StartupNavigation;
