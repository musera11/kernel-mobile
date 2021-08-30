import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import ChatRoomsScreen from '../screens/chat/ChatRoomsScreen';
import VenuesScreen from '../screens/venues/VenuesScreen';
import ProfileScreen from '../screens/profile/ProfileScreen';
import Icon from 'react-native-vector-icons/Fontisto';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function MainStack() {
  return (
    <Stack.Navigator screenOptions={{header: () => null}}>
      <Stack.Screen name="Main" component={TabNavigation} />
    </Stack.Navigator>
  );
}

function TabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        header: () => null,
        tabBarIcon: ({focused, color, size}) => {
          // return <Icon name="rocket" size={30} color="#900" />;
          return null;
        },
      }}>
      <Tab.Screen name="Venues" component={VenuesScreen} />
      <Tab.Screen name="ChatRooms" component={ChatRoomsScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
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
