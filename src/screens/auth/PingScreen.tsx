import React, {useEffect} from 'react';
import {Image, StyleSheet, View} from 'react-native';
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
    backgroundColor: 'white',
  },
  image: {
    width: 200,
    height: 200,
  },
});

export default PingScreen;
