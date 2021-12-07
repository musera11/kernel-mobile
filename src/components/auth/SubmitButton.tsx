import React from 'react';
import {
  GestureResponderEvent,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import {COLORS1} from '../../services/colors.service';
import {F_SEMI_BOLD} from '../../services/fonts.service';

const SubmitButton: React.FC<{
  onPress: (event: GestureResponderEvent) => void;
  disabled?: boolean;
}> = ({onPress, disabled = false}) => {
  return (
    <TouchableOpacity
      style={[styles.container, disabled && styles.disabled]}
      onPress={onPress}
      disabled={disabled}>
      <Text style={styles.text}>SUBMIT</Text>
    </TouchableOpacity>
  );
};

export default SubmitButton;

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
    fontFamily: F_SEMI_BOLD,
    letterSpacing: 2,
  },
  disabled: {
    opacity: 0.5,
  },
});
