/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {COLORS1} from '../../services/colors.service';
import {WS_BOLD, WS_REGULAR} from '../../services/fonts.service';
import SvgIcon from '../shared/SvgIcon';

const GoalDetailsCard: React.FC<{
  title: string;
  description: string;
  completed?: boolean;
  completionDate?: string;
}> = ({title, description, completionDate, completed}) => {
  return (
    <View style={[styles.container, {paddingBottom: completed ? 40 : 68}]}>
      <Text style={styles.titleText}>{title}</Text>
      <View style={styles.iconWrapper}>
        <SvgIcon name="personPencil" />
      </View>
      <Text style={styles.descText}>{description}</Text>
      {completed && (
        <Text style={styles.completedText}>Completed{completionDate}</Text>
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
    marginTop: 6,
  },
});
