import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useDispatch, useSelector} from 'react-redux';
import EmptyGoalsScreenCard from '../../components/goals/EmptyGoalsScreenCard';
import GoalItem from '../../components/goals/GoalItem';
import GoalsHeader from '../../components/goals/GoalsHeader';
import GoalsSelectButton from '../../components/goals/GoalsSelectButton';
import {COLORS1} from '../../services/colors.service';
import {RootState} from '../../store/configureStore';
import {getGoalsActionSG} from '../../store/ducks/goalsDuck';

const TABS = ['ALL GOALS', 'COMPLETED', 'INCOMPLETE'];

const GoalsScreen = () => {
  const {goals} = useSelector((state: RootState) => state.goalsReducer);
  const [selectedTab, setSelectedTab] = useState('ALL GOALS');
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      getGoalsActionSG(() => {
        setIsLoading(false);
      }),
    );
  }, [dispatch]);

  const renderRightGoals = () => {
    if (selectedTab === 'ALL GOALS') {
      return goals;
    } else if (selectedTab === 'COMPLETED') {
      return goals.filter(g => g.isCompleted === true);
    } else {
      return goals.filter(g => g.isCompleted === false);
    }
  };

  return (
    <LinearGradient colors={['#FFFFFF', '#F0F3F4']} style={styles.flex1}>
      <GoalsHeader />
      <View style={styles.tabsWrapper}>
        {TABS.map(t => (
          <View style={styles.marginRight8} key={t}>
            <GoalsSelectButton
              text={t}
              disabled={goals.length === 0}
              selected={t === selectedTab}
              onPress={() => setSelectedTab(t)}
            />
          </View>
        ))}
      </View>
      {isLoading ? null : (
        <>
          {goals.length === 0 ? (
            <View style={styles.emptyScreenContainer}>
              <View style={styles.flex2} />
              <EmptyGoalsScreenCard />
              <View style={styles.flex3} />
            </View>
          ) : (
            <ScrollView contentContainerStyle={styles.scrollView}>
              {renderRightGoals().map(g => (
                <GoalItem key={g._id} goal={g} containerStyle={styles.goal} />
              ))}
            </ScrollView>
          )}
        </>
      )}
    </LinearGradient>
  );
};

export default GoalsScreen;

const styles = StyleSheet.create({
  flex1: {
    flex: 1,
  },
  flex2: {
    flex: 2,
  },
  flex3: {
    flex: 3,
  },
  tabsWrapper: {
    flexDirection: 'row',
    marginLeft: 20,
    marginRight: 20,
    marginTop: 21,
    borderBottomWidth: 2,
    borderColor: COLORS1.gray4,
    paddingBottom: 19,
  },
  marginRight8: {
    marginRight: 8,
  },
  scrollView: {
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
  },
  goal: {
    marginBottom: 15,
  },
  emptyScreenContainer: {
    flex: 1,
    paddingLeft: 45,
    paddingRight: 45,
  },
});
