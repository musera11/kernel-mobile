import React from 'react';
import {
  GestureResponderEvent,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {COLORS1} from '../../services/colors.service';
import {RS_SEMI_BOLD} from '../../services/fonts.service';

const GoalsSelectButton: React.FC<{
  text: string;
  selected: boolean;
  disabled: boolean;
  onPress: (event: GestureResponderEvent) => any;
}> = ({text, selected, disabled, onPress}) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={selected ? {} : styles.container}>
      {selected ? (
        <LinearGradient
          colors={['#FFCF9A', '#FFBE76']}
          style={styles.container}>
          <Text style={styles.text}>{text}</Text>
        </LinearGradient>
      ) : (
        <Text style={styles.text}>{text}</Text>
      )}
    </TouchableOpacity>
  );
};

export default GoalsSelectButton;

const styles = StyleSheet.create({
  container: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 7,
    paddingBottom: 7,
    backgroundColor: '#C8D1D3',
    borderRadius: 10,
  },
  text: {
    fontFamily: RS_SEMI_BOLD,
    fontSize: 12,
    color: COLORS1.white,
    lineHeight: 15,
  },
});
