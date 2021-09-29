import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {Text} from 'react-native';
import Icon from 'react-native-vector-icons/Fontisto';
import ChatRoomsScreen from '../screens/chat/ChatRoomsScreen';
import VenuesScreen from '../screens/venues/VenuesScreen';
import ProfileScreen from '../screens/profile/ProfileScreen';
import {COLORS} from '../services/colors.service';
import {StyleSheet} from 'react-native';
import ProfileSettingsScreen from '../screens/profile/ProfileSettingsScreent';

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
      screenOptions={({route}) => {
        return {
          header: () => null,
          tabBarLabelStyle: {
            fontSize: 12,
          },
          tabBarHideOnKeyboard: true,
          tabBarLabel: ({focused}) => {
            let tabText;
            switch (route.name) {
              case 'Venues':
                tabText = 'Venues';
                break;
              case 'ChatRooms':
                tabText = 'Messages';
                break;
              case 'Profile':
                tabText = 'Profile';
                break;
              default:
                break;
            }
            return (
              <Text
                style={[
                  styles.tabText,
                  {color: focused ? COLORS.purple1 : COLORS.brown1},
                ]}>
                {tabText}
              </Text>
            );
          },
          tabBarIcon: ({focused, size}) => {
            switch (route.name) {
              case 'Venues':
                return (
                  <Icon
                    name="rocket"
                    size={size}
                    color={focused ? COLORS.purple1 : COLORS.brown1}
                  />
                );
              case 'ChatRooms':
                return (
                  <Icon
                    name="rocket"
                    size={size}
                    color={focused ? COLORS.purple1 : COLORS.brown1}
                  />
                );
              case 'Profile':
                return (
                  <Icon
                    name="rocket"
                    size={size}
                    color={focused ? COLORS.purple1 : COLORS.brown1}
                  />
                );
              default:
                break;
            }
          },
        };
      }}>
      <Tab.Screen name="ProfileSettings" component={ProfileSettingsScreen} />
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

const styles = StyleSheet.create({
  tabText: {
    fontSize: 12,
  },
});
