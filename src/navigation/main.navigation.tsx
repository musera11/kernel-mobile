import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import ForYouScreen from '../screens/for-you/ForYouScreen';
import TabBar from '../components/shared/TabBar';
import CheckInScreen from '../screens/check-in/CheckInScreen';
import BGimageHoc from '../hocs/BGimageHoc';
import ChooseEthosCardsScreen from '../screens/ethos/ChooseEthosCardsScreen';
import PhysicalDimensionScreen from '../screens/ethos/PhysicalDimensionScreen';
import MentalDimensionScreen from '../screens/ethos/MentalDimensionScreen';
import SocialDimensionScreen from '../screens/ethos/SocialDimensionScreen';
import OccupationalDimensionScreen from '../screens/ethos/OccupationalDimensionScreen';
import EnvironmentalDimensionScreen from '../screens/ethos/EnvironmentalDimensionScreen';
import EmotionalDimensionScreen from '../screens/ethos/EmotionalDimensionScreen';
import SpiritualDimensionScreen from '../screens/ethos/SpiritualDimensionScreen';
import EditEthosCardsScreen from '../screens/ethos/EditEthosCardsScreen';
import SubmitSelectedEthosCardsScreen from '../screens/ethos/SubmitSelectedEthosCards';
import MyAccomplishmentsScreen from '../screens/profile/MyAccomplishmentsScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function MainStack() {
  return (
    <Stack.Navigator screenOptions={{header: () => null}}>
      <Stack.Screen name="Main" component={TabNavigation} />
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
      <Stack.Screen
        name="SubmitSelectedEthosCards"
        component={SubmitSelectedEthosCardsScreen}
      />
      <Stack.Screen
        name="MyAccomplishments"
        component={MyAccomplishmentsScreen}
      />
    </Stack.Navigator>
  );
}

function TabNavigation() {
  return (
    <Tab.Navigator
      tabBar={props => <TabBar {...props} />}
      screenOptions={() => {
        return {
          header: () => null,
          tabBarHideOnKeyboard: true,
        };
      }}>
      <Tab.Screen name="ForYou" component={BGimageHoc(ForYouScreen)} />
      <Tab.Screen name="CheckIn" component={CheckInScreen} />
    </Tab.Navigator>
  );
}

function MainNavigation() {
  return (
    <Stack.Navigator screenOptions={{header: () => null}}>
      <Stack.Screen name="MainStack" component={MainStack} />
    </Stack.Navigator>
  );
}

export default MainNavigation;
