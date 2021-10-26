import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useDispatch} from 'react-redux';
import GoalDetailsCard from '../../components/goals/GoalDetailsCard';
import SvgIcon from '../../components/shared/SvgIcon';
import {COLORS1} from '../../services/colors.service';
import {RS_SEMI_BOLD} from '../../services/fonts.service';
import {updateGoalActionSG} from '../../store/ducks/goalsDuck';
import {Goal} from '../../types/goals';

const GoalDetailsScreen: React.FC<{
  navigation: any;
  route: {params: {goal: Goal}};
}> = ({route, navigation}) => {
  const {goal} = route.params;
  const dispatch = useDispatch();
  const insets = useSafeAreaInsets();

  const goBack = () => {
    navigation.goBack();
  };

  const markAsComplete = () => {
    dispatch(updateGoalActionSG({...goal, isCompleted: true}));
    goBack();
  };

  return (
    <LinearGradient
      colors={['#FFFFFF', '#F0F3F4']}
      style={[styles.container, {paddingTop: insets.top}]}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backIconWrapper} onPress={goBack}>
          <SvgIcon name="arrowBackBlack" />
        </TouchableOpacity>
      </View>
      <View style={styles.flex1} />
      <View style={styles.goalDetailsWrapper}>
        <GoalDetailsCard goal={goal} />
      </View>
      {!goal.isCompleted && (
        <View style={styles.buttonWrapper}>
          <TouchableOpacity style={styles.button} onPress={markAsComplete}>
            <Text style={styles.buttonText}>MARK COMPLETE</Text>
          </TouchableOpacity>
        </View>
      )}
      <View style={goal.isCompleted ? styles.flex2 : styles.flex1} />
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
  flex2: {
    flex: 2,
  },
  header: {},
  backIconWrapper: {
    padding: 10,
    marginLeft: 16,
    marginTop: 5,
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
