import React from 'react';
import {
  GestureResponderEvent,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import {COLORS1} from '../../services/colors.service';
import {WS_SEMI_BOLD} from '../../services/fonts.service';

const LoginButton: React.FC<{onPress: (event: GestureResponderEvent) => void}> =
  ({onPress}) => {
    return (
      <TouchableOpacity style={styles.container} onPress={onPress}>
        <Text style={styles.text}>LOGIN</Text>
      </TouchableOpacity>
    );
  };

export default LoginButton;

const styles = StyleSheet.create({
  container: {
    width: 307,
    height: 52,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderRadius: 26,
    borderColor: COLORS1.white,
  },
  text: {
    fontSize: 14,
    color: COLORS1.white,
    fontFamily: WS_SEMI_BOLD,
    letterSpacing: 2,
  },
});
