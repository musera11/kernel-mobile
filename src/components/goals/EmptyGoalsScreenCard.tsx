import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {COLORS1} from '../../services/colors.service';
import {WS_BOLD} from '../../services/fonts.service';
import SvgIcon from '../shared/SvgIcon';

const EmptyGoalsScreenCard = () => {
  const navigation = useNavigation();

  const navigateToCreateGoal = () => {
    // navigation.navigate('')
  };

  return (
    <TouchableOpacity style={styles.container} onPress={navigateToCreateGoal}>
      <View style={styles.upperContainer}>
        <SvgIcon name="personPencil" />
      </View>
      <LinearGradient
        style={styles.lowerContainer}
        colors={['#72CCD0', '#87BCBF']}>
        <View style={styles.textWrapper}>
          <Text style={styles.text}>Let’s help you out with</Text>
          <Text style={styles.text}> writing your first goal</Text>
        </View>
        <View style={styles.iconWrapper}>
          <SvgIcon name="arrowBack" />
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default EmptyGoalsScreenCard;

const styles = StyleSheet.create({
  container: {
    width: 300,
    borderRadius: 10,
    backgroundColor: COLORS1.white,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  upperContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 153,
  },
  lowerContainer: {
    alignItems: 'center',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  textWrapper: {
    marginBottom: 9,
    marginTop: 18,
  },
  text: {
    fontFamily: WS_BOLD,
    color: COLORS1.white,
    fontSize: 18,
    lineHeight: 22,
  },
  iconWrapper: {
    width: 32,
    height: 32,
    borderRadius: 32,
    backgroundColor: COLORS1.orange,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 14,
  },
});
