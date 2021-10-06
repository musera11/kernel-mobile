import React from 'react';
import {StyleSheet, Text, TouchableOpacity, ViewStyle} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {COLORS1} from '../../services/colors.service';
import {RS_BOLD} from '../../services/fonts.service';

const EthosCard: React.FC<{
  card: {title: string; _id: string};
  onPress: Function;
  containerStyle?: ViewStyle;
  disabled?: boolean;
  selected?: boolean;
}> = ({card, onPress, containerStyle, disabled, selected}) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      style={[
        styles.container,
        {backgroundColor: !selected ? COLORS1.orange : undefined},
        containerStyle,
      ]}
      onPress={() => onPress(card)}>
      {selected ? (
        <LinearGradient
          colors={['#72CCD0', '#87BCBF']}
          style={styles.container}>
          <Text style={styles.text}>{card.title}</Text>
        </LinearGradient>
      ) : (
        <Text style={styles.text}>{card.title}</Text>
      )}
    </TouchableOpacity>
  );
};

export default EthosCard;

const styles = StyleSheet.create({
  container: {
    width: 70,
    height: 75,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: COLORS1.white,
    padding: 5,
  },
  text: {
    textAlign: 'center',
    fontFamily: RS_BOLD,
    fontSize: 14,
    color: COLORS1.white,
  },
});
