import {NavigationContainer, Theme} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {useSelector} from 'react-redux';
import PingScreen from '../screens/auth/PingScreen';
import {_navigator} from '../services/navigation.service';
import {RootState} from '../store/configureStore';
import AuthNavigation from './auth.navigation';
import MainNavigation from './main.navigation';
const Stack = createStackNavigator();

const StartupNavigation: React.FC<{theme: Theme | undefined}> = ({theme}) => {
  const {isLoading, isSignedIn} = useSelector(
    (state: RootState) => state.mainReducer,
  );

  return (
    <NavigationContainer theme={theme} ref={_navigator}>
      {isLoading ? (
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="Ping" component={PingScreen} />
        </Stack.Navigator>
      ) : isSignedIn ? (
        <MainNavigation />
      ) : (
        <AuthNavigation />
      )}
    </NavigationContainer>
  );
};

export default StartupNavigation;
