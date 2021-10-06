import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {COLORS} from '../../services/colors.service';
import {WS_BOLD} from '../../services/fonts.service';
import {checkSignedInAction} from '../../store/ducks/authDuck';

const PingScreen = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkSignedInAction());
  }, [dispatch]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>EMPOWER</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.purple1,
  },
  text: {
    color: COLORS.white1,
    fontSize: 28,
    fontFamily: WS_BOLD,
  },
});

export default PingScreen;
