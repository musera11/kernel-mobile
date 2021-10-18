import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';
import SvgIcon from './SvgIcon';
import {COLORS1} from '../../services/colors.service';
import {RS_BOLD, RS_SEMI_BOLD} from '../../services/fonts.service';
import {ParamListBase, TabNavigationState} from '@react-navigation/routers';
import {
  BottomTabDescriptorMap,
  BottomTabNavigationEventMap,
} from '@react-navigation/bottom-tabs/lib/typescript/src/types';
import {NavigationHelpers} from '@react-navigation/core';

const TabBar: React.FC<{
  state: TabNavigationState<ParamListBase>;
  descriptors: BottomTabDescriptorMap;
  navigation: NavigationHelpers<ParamListBase, BottomTabNavigationEventMap>;
}> = ({state, descriptors, navigation}) => {
  const insets = useSafeAreaInsets();

  const getIconNameByRoute = (route: string) => {
    switch (route) {
      case 'ForYou':
        return 'person';
      case 'CheckIn':
        return 'sun';
      default:
        break;
    }
  };

  const getLabelByRoute = (route: string) => {
    switch (route) {
      case 'ForYou':
        return 'FOR YOU';
      case 'CheckIn':
        return 'CHECK IN';
      default:
        break;
    }
  };

  return (
    <LinearGradient
      colors={['#72CCD0', '#87BCBF']}
      style={[styles.container, {paddingBottom: insets.bottom}]}>
      <View style={styles.tabsWrapper}>
        {state.routes.map((route, index) => {
          console.log(route.name);
          const {options} = descriptors[route.key];
          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              // The `merge: true` option makes sure that the params inside the tab screen are preserved
              // navigation.navigate({name: route.name, merge: true});
              navigation.navigate(route.name);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          return (
            <TouchableOpacity
              key={`${index}`}
              accessibilityRole="button"
              accessibilityState={isFocused ? {selected: true} : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={styles.tab}>
              <SvgIcon
                name={getIconNameByRoute(route.name)}
                style={isFocused ? styles.selectedSvg : styles.svg}
              />
              <Text style={[styles.label, isFocused && styles.sleetedLabel]}>
                {getLabelByRoute(route.name)}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </LinearGradient>
  );
};

export default TabBar;
const styles = StyleSheet.create({
  container: {
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    position: 'absolute',
    left: 0,
    bottom: 0,
    right: 0,
  },
  tabsWrapper: {
    flexDirection: 'row',
    paddingLeft: 15,
    paddingRight: 15,
  },
  tab: {
    alignItems: 'center',
    padding: 10,
  },
  label: {
    fontSize: 12,
    color: COLORS1.white,
    fontFamily: RS_SEMI_BOLD,
    marginTop: 6,
    opacity: 0.7,
    letterSpacing: 1.2,
  },
  sleetedLabel: {
    fontFamily: RS_BOLD,
    opacity: 1,
  },
  svg: {
    opacity: 0.9,
  },
  selectedSvg: {
    opacity: 1,
  },
});
