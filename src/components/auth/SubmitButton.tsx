import React from 'react';
import {
  GestureResponderEvent,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import {COLORS1} from '../../services/colors.service';

const SubmitButton: React.FC<{
  onPress: (event: GestureResponderEvent) => void;
}> = ({onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
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
  },
});
