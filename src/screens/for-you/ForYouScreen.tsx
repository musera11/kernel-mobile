import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useDispatch} from 'react-redux';
import SvgIcon from '../../components/shared/SvgIcon';
import {logoutAction} from '../../store/ducks/authDuck';

const ForYouScreen: React.FC<{navigation: any}> = ({navigation}) => {
  const dispatch = useDispatch();
  return (
    <>
      <View style={styles.header}>
        <TouchableOpacity style={styles.touchable}>
          <SvgIcon name="profileSettings" />
        </TouchableOpacity>
        <SvgIcon name="empower" />
        <TouchableOpacity style={styles.touchable}>
          <SvgIcon name="hart" />
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={() => dispatch(logoutAction())}>
        <Text>Sign out</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('ChooseEthosCards')}>
        <Text>Ethos Flow</Text>
      </TouchableOpacity>
    </>
  );
};

export default ForYouScreen;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 21,
    paddingRight: 21,
  },
  touchable: {
    padding: 10,
  },
});
