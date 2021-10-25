import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {COLORS1} from '../../services/colors.service';
import {WS_BOLD} from '../../services/fonts.service';
import SvgIcon from '../shared/SvgIcon';

const GoalsHeader = () => {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();

  const goBack = () => {
    navigation.goBack();
  };

  const navigateToAddGoal = () => {
    // navigation.navigate('');
  };

  return (
    <LinearGradient
      colors={['#516A7B', '#324755']}
      style={[styles.header, {paddingTop: insets.top + 20}]}>
      <TouchableOpacity style={styles.backWrapper} onPress={goBack}>
        <SvgIcon name="arrowBack" />
      </TouchableOpacity>
      <Text style={styles.text}>My Goals</Text>
      <TouchableOpacity style={styles.addWrapper} onPress={navigateToAddGoal}>
        <SvgIcon name="hart" />
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default GoalsHeader;

const styles = StyleSheet.create({
  flex1: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 21,
    paddingRight: 21,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    paddingBottom: 25,
  },
  backWrapper: {
    padding: 5,
  },
  addWrapper: {
    width: 31,
    height: 31,
    backgroundColor: COLORS1.orange,
    borderRadius: 31,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    color: COLORS1.white,
    fontFamily: WS_BOLD,
  },
});
