import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LandingScreen from '../screens/auth/LandingScreen';
import TemplateScreen from '../screens/auth/TemplateScren';
import AddCompanyScreen from '../screens/auth/AddCompanyScreen';

const Stack = createStackNavigator();

function AuthStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Landing" component={LandingScreen} />
      <Stack.Screen name="Template" component={TemplateScreen} />
      <Stack.Screen name="AddCompany" component={AddCompanyScreen} />
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
