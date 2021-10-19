import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import AccomplishedIndicator from '../../components/profile/AccomplishedIndicator';
import SvgIcon from '../../components/shared/SvgIcon';
import {COLORS1} from '../../services/colors.service';
import {WS_BOLD, WS_MEDIUM} from '../../services/fonts.service';

const ACCOMPLISHMENTS = [
  'PHYSICAL',
  'MENTAL',
  'SOCIAL',
  'OCCUPATIONAL',
  'ENVIRONMENTAL',
  'EMOTIONAL',
  'SPIRITUAL',
];

const MyAccomplishmentsScreen = () => {
  const insets = useSafeAreaInsets();
  return (
    <View style={styles.container}>
      <View style={[styles.header, {paddingTop: insets.top}]}>
        <TouchableOpacity style={styles.touchable}>
          <SvgIcon name="arrowBack" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Cody</Text>
        <TouchableOpacity style={styles.touchable}>
          <SvgIcon name="tool" />
        </TouchableOpacity>
      </View>
      <ScrollView bounces={false}>
        <View style={styles.subHeader}>
          <Text style={styles.subHeaderText}>My accomplishments</Text>
          <View style={styles.completedWrapper}>
            <View style={styles.completedItem}>
              <SvgIcon name="done" />
              <View style={styles.completedItemTextWrapper}>
                <Text style={styles.completedItemCountText}>12</Text>
                <Text style={styles.completedItemText}>SESSIONS COMPLETED</Text>
              </View>
            </View>
            <View style={styles.completedItem}>
              <SvgIcon name="personPencil" />
              <View style={styles.completedItemTextWrapper}>
                <Text style={styles.completedItemCountText}>12</Text>
                <Text style={styles.completedItemText}>GOALS COMPLETED</Text>
              </View>
            </View>
          </View>
        </View>
        <Text style={styles.overageText}>7 day average</Text>
        <View style={styles.accomplishmentsWrapper}>
          {ACCOMPLISHMENTS.map((item, index) => (
            <View style={styles.accomplishment} key={`${index}`}>
              <AccomplishedIndicator name={item} percentage={75} />
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default MyAccomplishmentsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: COLORS1.gray2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 21 - 8,
    paddingRight: 21 - 8,
    paddingBottom: 15 - 8,
  },
  touchable: {
    padding: 8,
  },
  headerText: {
    fontFamily: WS_BOLD,
    fontSize: 18,
    color: COLORS1.white,
  },
  subHeader: {
    backgroundColor: COLORS1.gray2,
    paddingBottom: 40,
    borderBottomRightRadius: 8,
    borderBottomLeftRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  subHeaderText: {
    fontFamily: WS_BOLD,
    fontSize: 15,
    color: COLORS1.white,
    marginBottom: 30,
    textAlign: 'center',
  },
  completedWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingLeft: 10,
  },
  completedItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  completedItemTextWrapper: {
    width: 75,
    marginLeft: 13,
  },
  completedItemCountText: {
    fontFamily: WS_BOLD,
    fontSize: 20,
    color: COLORS1.gray1,
  },
  completedItemText: {
    fontFamily: WS_MEDIUM,
    fontSize: 12,
    color: COLORS1.gray1,
  },
  overageText: {
    fontFamily: WS_BOLD,
    fontSize: 15,
    color: COLORS1.gray2,
    marginTop: 25,
    marginBottom: 20,
    marginLeft: 32,
  },
  accomplishmentsWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20,
  },
  accomplishment: {
    padding: 11,
  },
});
