import React from 'react';
import {StyleSheet, View} from 'react-native';
import {COLORS1} from '../../services/colors.service';
import {WS_BOLD, WS_REGULAR} from '../../services/fonts.service';

const LandingScreen = ({navigation}: {navigation: any}) => {
  return <View style={styles.container} />;
};

export default LandingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  upperContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 70,
    flex: 1,
  },
  lowerContainer: {
    height: 395,
  },
  image: {
    width: 224,
    height: 96,
  },
  majorText: {
    fontSize: 30,
    color: COLORS1.white,
    marginTop: 30,
    marginLeft: 35,
    width: 200,
    fontFamily: WS_BOLD,
  },
  line: {
    width: 33,
    height: 2,
    backgroundColor: COLORS1.white,
    marginTop: 15,
    marginBottom: 13,
    marginLeft: 35,
  },
  minorText: {
    fontSize: 18,
    color: COLORS1.gray1,
    marginLeft: 35,
    marginBottom: 50,
    fontFamily: WS_REGULAR,
  },
  buttonsWrapper: {
    alignItems: 'center',
  },
  buttonsDivider: {
    height: 25,
  },
});
