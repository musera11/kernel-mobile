import React from 'react';
import {
  GestureResponderEvent,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import {COLORS1} from '../../services/colors.service';

const SignUpButton: React.FC<{
  onPress: (event: GestureResponderEvent) => void;
}> = ({onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
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
  },
  text: {
    fontSize: 14,
    color: COLORS1.black1,
  },
});
