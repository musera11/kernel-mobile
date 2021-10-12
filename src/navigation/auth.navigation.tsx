import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LandingScreen from '../screens/auth/LandingScreen';
import BGimageHoc from '../hocs/BGimageHoc';
import SignInScreen from '../screens/auth/SignInScreen';
import SignUpScreen from '../screens/auth/SignUpScreen';
import InstructionsScreen from '../screens/ethos/InstructionsScreen';
import ChooseEthosCardsScreen from '../screens/ethos/ChooseEthosCardsScreen';
import PhysicalDimensionScreen from '../screens/ethos/PhysicalDimensionScreen';
import MentalDimensionScreen from '../screens/ethos/MentalDimensionScreen';
import SocialDimensionScreen from '../screens/ethos/SocialDimensionScreen';
import OccupationalDimensionScreen from '../screens/ethos/OccupationalDimensionScreen';
import EnvironmentalDimensionScreen from '../screens/ethos/EnvironmentalDimensionScreen';
import EmotionalDimensionScreen from '../screens/ethos/EmotionalDimensionScreen';
import SpiritualDimensionScreen from '../screens/ethos/SpiritualDimensionScreen';
import EditEthosCardsScreen from '../screens/ethos/EditEthosCardsScreen';

const Stack = createStackNavigator();

function AuthStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Landing" component={BGimageHoc(LandingScreen)} />
      <Stack.Screen name="SignIn" component={BGimageHoc(SignInScreen, true)} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
      <Stack.Screen
        name="ChooseEthosCards"
        component={ChooseEthosCardsScreen}
      />
      <Stack.Screen
        name="PhysicalDimension"
        component={PhysicalDimensionScreen}
      />
      <Stack.Screen name="MentalDimension" component={MentalDimensionScreen} />
      <Stack.Screen
        name="OccupationalDimension"
        component={OccupationalDimensionScreen}
      />
      <Stack.Screen name="SocialDimension" component={SocialDimensionScreen} />
      <Stack.Screen
        name="EnvironmentalDimension"
        component={EnvironmentalDimensionScreen}
      />
      <Stack.Screen
        name="EmotionalDimension"
        component={EmotionalDimensionScreen}
      />
      <Stack.Screen
        name="SpiritualDimension"
        component={SpiritualDimensionScreen}
      />
      <Stack.Screen name="EditEthosCards" component={EditEthosCardsScreen} />
      <Stack.Screen name="Instructions" component={InstructionsScreen} />
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
