/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {COLORS1} from '../../services/colors.service';
import {WS_BOLD, WS_REGULAR} from '../../services/fonts.service';
import {Goal} from '../../types/goals';
import SvgIcon from '../shared/SvgIcon';

const GoalDetailsCard: React.FC<{
  goal: Goal;
}> = ({goal}) => {
  const {title, text, isCompletedAt, isCompleted} = goal;
  return (
    <View style={[styles.container, {paddingBottom: isCompleted ? 40 : 68}]}>
      <Text style={styles.titleText}>{title}</Text>
      {isCompleted ? (
        <LinearGradient
          style={styles.iconWrapper}
          colors={['#9FD9CA', '#87BFB0']}>
          <SvgIcon name="doneWhite" />
        </LinearGradient>
      ) : (
        <View style={styles.iconWrapper}>
          <SvgIcon name="doneWhite" />
        </View>
      )}
      <Text style={styles.descText}>{text}</Text>
      {isCompletedAt && (
        <Text style={styles.completedText}>
          Completed
          {` ${isCompletedAt && new Date(isCompletedAt).toLocaleDateString()}`}
        </Text>
      )}
    </View>
  );
};

export default GoalDetailsCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS1.white,
    alignItems: 'center',
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 39,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  titleText: {
    color: COLORS1.gray2,
    fontFamily: WS_BOLD,
    fontSize: 18,
    textAlign: 'center',
  },
  iconWrapper: {
    marginTop: 40,
    marginBottom: 40,
    width: 89,
    height: 89,
    borderRadius: 89,
    backgroundColor: COLORS1.gray6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  descText: {
    color: COLORS1.gray2,
    fontFamily: WS_REGULAR,
    fontSize: 18,
    textAlign: 'center',
  },
  completedText: {
    color: COLORS1.gray2,
    fontFamily: WS_BOLD,
    fontSize: 12,
    textAlign: 'center',
    marginTop: 10,
  },
});
