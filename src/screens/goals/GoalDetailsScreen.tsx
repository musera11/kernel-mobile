import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import GoalDetailsCard from '../../components/goals/GoalDetailsCard';
import SvgIcon from '../../components/shared/SvgIcon';
import {COLORS1} from '../../services/colors.service';
import {RS_SEMI_BOLD} from '../../services/fonts.service';

const GoalDetailsScreen = () => {
  const insets = useSafeAreaInsets();

  const markAsComplete = () => {};

  return (
    <LinearGradient
      colors={['#FFFFFF', '#F0F3F4']}
      style={[styles.container, {paddingTop: insets.top}]}>
      <View style={styles.header}>
        <View style={styles.backIconWrapper}>
          <SvgIcon name="blackX" />
        </View>
      </View>
      <View style={styles.flex1} />
      <View style={styles.goalDetailsWrapper}>
        <GoalDetailsCard
          title="Goal title here"
          description="Montes tum mara quam voco oppeto vitae. Ridiculus semper vehicula indoles curabitur nisl"
        />
      </View>
      <View style={styles.buttonWrapper}>
        <TouchableOpacity style={styles.button} onPress={markAsComplete}>
          <Text style={styles.buttonText}>MARK COMPLETE</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.flex1} />
    </LinearGradient>
  );
};

export default GoalDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  flex1: {
    flex: 1,
  },
  header: {},
  backIconWrapper: {
    padding: 10,
  },
  subContainer: {
    paddingLeft: 19,
    paddingRight: 19,
  },
  goalDetailsWrapper: {
    marginLeft: 20,
    marginRight: 20,
  },
  buttonWrapper: {
    alignItems: 'center',
    marginTop: 41,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 295,
    height: 50,
    borderWidth: 1,
    borderColor: COLORS1.gray2,
    borderRadius: 25,
  },
  buttonText: {
    fontSize: 14,
    letterSpacing: 2.1,
    fontFamily: RS_SEMI_BOLD,
    color: COLORS1.gray2,
  },
});
