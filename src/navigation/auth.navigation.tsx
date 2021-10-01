import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LandingScreen from '../screens/auth/LandingScreen';
import BGimageHoc from '../hocs/BGimageHoc';

const Stack = createStackNavigator();

function AuthStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Landing" component={BGimageHoc(LandingScreen)} />
    </Stack.Navigator>
  );
}

function AuthNavigation() {
  return (
    <Stack.Navigator screenOptions={{header: () => null}}>
      <Stack.Screen name="AuthStack" component={AuthStack} />
    </Stack.Navigator>
  );
}

export default AuthNavigation;
