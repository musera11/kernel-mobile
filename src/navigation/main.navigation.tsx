import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import ForYouScreen from '../screens/for-you/ForYouScreen';
import TabBar from '../components/shared/TabBar';
import SidebarScreen from '../screens/sidebar/SidebarScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function MainStack() {
  return (
    <Stack.Navigator screenOptions={{header: () => null}}>
      <Stack.Screen name="Main" component={TabNavigation} />
      <Stack.Screen name="Sidebar" component={SidebarScreen} />
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
      <Tab.Screen name="ForYou" component={ForYouScreen} />
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
