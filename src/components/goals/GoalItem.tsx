import React, {useRef} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import {Swipeable} from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import FontAwesome from 'react-native-vector-icons/AntDesign';
import {COLORS1} from '../../services/colors.service';
import {RS_SEMI_BOLD, WS_BOLD} from '../../services/fonts.service';
import navigationService from '../../services/navigation.service';
import {Goal} from '../../types/goals';
import SvgIcon from '../shared/SvgIcon';
import {useDispatch} from 'react-redux';
import {deleteGoalActionSG} from '../../store/ducks/goalsDuck';
import notificationService from '../../services/notification.service';

const GoalItem: React.FC<{
  goal: Goal;
  containerStyle?: ViewStyle;
}> = ({goal, containerStyle}) => {
  const dispatch = useDispatch();
  const swiper = useRef(null);
  const {title, text, isCompleted} = goal;

  const navigateToGoalDetails = () => {
    navigationService.navigate('GoalDetails', {goal});
  };

  const navigateToEditGoal = () => {
    navigationService.navigate('EditGoal', {goal});
    (swiper.current as any).close();
  };

  const deleteGoal = () => {
    dispatch(
      deleteGoalActionSG(goal._id, () =>
        notificationService.notify(
          'success',
          'Success',
          'the goal successfully updated',
        ),
      ),
    );
  };

  const renderContent = () => (
    <>
      <View>
        <Text style={styles.titleText}>{title}</Text>
        <Text style={styles.descText} ellipsizeMode="tail" numberOfLines={1}>
          {text}
        </Text>
      </View>
      <View style={[styles.iconWrapper, isCompleted && styles.iconWrapper]}>
        <SvgIcon name="arrowFrontBlack" />
      </View>
    </>
  );

  const renderRightActions = () => {
    return (
      <TouchableOpacity
        style={styles.rightActionsContainer}
        onPress={deleteGoal}>
        <EvilIcons name="trash" color={COLORS1.gray2} size={40} />
      </TouchableOpacity>
    );
  };

  const renderLeftActions = () => {
    return (
      <TouchableOpacity
        style={styles.leftActionsContainer}
        onPress={navigateToEditGoal}>
        <FontAwesome name="edit" color={COLORS1.gray2} size={31} />
      </TouchableOpacity>
    );
  };

  return (
    <>
      <Swipeable
        renderLeftActions={!goal.isCompleted ? renderLeftActions : undefined}
        renderRightActions={renderRightActions}
        overshootLeft={false}
        ref={swiper}>
        {isCompleted ? (
          <TouchableOpacity
            style={styles.shadow}
            onPress={navigateToGoalDetails}>
            <LinearGradient
              style={[styles.container, containerStyle]}
              colors={['#9FD9CA', '#87BFB0']}>
              {renderContent()}
            </LinearGradient>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={[styles.container, styles.shadow, containerStyle]}
            onPress={navigateToGoalDetails}>
            {renderContent()}
          </TouchableOpacity>
        )}
      </Swipeable>
    </>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: COLORS1.white,
    borderRadius: 10,
    paddingLeft: 16,
    paddingRight: 20,
    paddingTop: 20,
    paddingBottom: 19,
  },
  shadow: {
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
    fontFamily: WS_BOLD,
    fontSize: 18,
    color: COLORS1.gray2,
  },
  descText: {
    fontFamily: RS_SEMI_BOLD,
    fontSize: 11,
    letterSpacing: 1.65,
    color: COLORS1.green3,
    marginTop: 5,
    maxWidth: 240,
  },
  iconWrapper: {
    width: 27,
    height: 27,
    borderRadius: 27,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS1.white,
  },
  rightActionsContainer: {
    height: 79,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  leftActionsContainer: {
    height: 79,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
