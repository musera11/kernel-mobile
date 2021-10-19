/* eslint-disable react-native/no-inline-styles */
import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {StyleSheet, Text, View, ViewStyle} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {COLORS1} from '../../services/colors.service';
import {WS_BOLD} from '../../services/fonts.service';

const Header: React.FC<{
  style?: ViewStyle;
  statusBarMargin?: boolean;
  title?: string;
}> = ({style, statusBarMargin, title}) => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();

  const onBackPress = () => {
    navigation.canGoBack() && navigation.goBack();
  };

  return (
    <View
      style={[
        styles.container,
        {...style, marginTop: statusBarMargin ? insets.top : 0},
      ]}>
      <TouchableOpacity style={styles.touchable} onPress={onBackPress}>
        <Ionicons size={30} color={COLORS1.gray2} name="chevron-back" />
      </TouchableOpacity>
      {title && (
        <>
          <Text style={styles.title}>{title}</Text>
          <View style={styles.emptyBox} />
        </>
      )}
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 10,
  },
  touchable: {
    padding: 5,
  },
  title: {
    color: COLORS1.gray2,
    fontSize: 18,
    fontFamily: WS_BOLD,
  },
  emptyBox: {
    width: 35,
  },
});
