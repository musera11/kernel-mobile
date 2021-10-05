import React from 'react';
import {
  GestureResponderEvent,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import {COLORS1} from '../../services/colors.service';
import {RS_SEMI_BOLD} from '../../services/fonts.service';
import SvgIcon from '../shared/SvgIcon';

const SignUpButton: React.FC<{
  onPress: (event: GestureResponderEvent) => void;
}> = ({onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <SvgIcon name="email" style={styles.sgv} />
      <Text style={styles.text}>SIGN UP WITH EMAIL</Text>
    </TouchableOpacity>
  );
};

export default SignUpButton;

const styles = StyleSheet.create({
  container: {
    width: 307,
    height: 52,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 26,
    backgroundColor: COLORS1.white,
    flexDirection: 'row',
  },
  text: {
    fontSize: 14,
    color: COLORS1.black1,
    marginLeft: 5,
    fontFamily: RS_SEMI_BOLD,
    letterSpacing: 2,
  },
  sgv: {
    marginTop: 2,
  },
});
