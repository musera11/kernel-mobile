import React, {useEffect} from 'react';
import {StyleSheet, View, Image} from 'react-native';
import {useDispatch} from 'react-redux';
import {checkSignedInAction} from '../../store/ducks/authDuck';

const PingScreen = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkSignedInAction());
  }, [dispatch]);

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/splash.png')}
        resizeMode="contain"
        style={styles.image}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#516A7B',
  },
  image: {
    width: 176,
    height: 133,
  },
});

export default PingScreen;
