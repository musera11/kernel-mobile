import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useDispatch} from 'react-redux';
import SvgIcon from '../../components/shared/SvgIcon';
import {checkSignedInAction} from '../../store/ducks/authDuck';

const PingScreen = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkSignedInAction());
  }, [dispatch]);

  return (
    <View style={styles.container}>
      <SvgIcon name="logo" style={styles.image} />
      <Text style={styles.text}>Simple invoicing and financial tools</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  image: {
    // width: 130,
    height: 40,
  },
  text: {
    marginTop: 18,
    color: '#293961',
    fontSize: 20,
  },
});

export default PingScreen;
