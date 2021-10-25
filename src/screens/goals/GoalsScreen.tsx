import React, {useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import EmptyGoalsScreenCard from '../../components/goals/EmptyGoalsScreenCard';
import GoalItem from '../../components/goals/GoalItem';
import GoalsHeader from '../../components/goals/GoalsHeader';
import GoalsSelectButton from '../../components/goals/GoalsSelectButton';
import {COLORS1} from '../../services/colors.service';

const TABS = ['ALL GOALS', 'COMPLETED', 'INCOMPLETE'];

const GoalsScreen = () => {
  const [disableTabs, setDisableTabs] = useState(false);
  const [selectedTab, setSelectedTab] = useState('ALL GOALS');

  return (
    <LinearGradient colors={['#FFFFFF', '#F0F3F4']} style={styles.flex1}>
      <GoalsHeader />
      <View style={styles.tabsWrapper}>
        {TABS.map(t => (
          <View style={styles.marginRight8} key={t}>
            <GoalsSelectButton
              text={t}
              disabled={disableTabs}
              selected={t === selectedTab}
              onPress={() => setSelectedTab(t)}
            />
          </View>
        ))}
      </View>
      {true ? (
        <View style={styles.emptyScreenContainer}>
          <View style={styles.flex2} />
          <EmptyGoalsScreenCard />
          <View style={styles.flex3} />
        </View>
      ) : (
        <ScrollView contentContainerStyle={styles.scrollView}>
          <GoalItem
            title="my goal title"
            description="some description"
            containerStyle={styles.goal}
          />
        </ScrollView>
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
