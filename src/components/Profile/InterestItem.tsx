import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {COLORS} from '../../services/colors.service';
import {M_MEDIUM} from '../../services/fonts.service';

const InterestItem: React.FC<{
  interest: string;
  index: number;
  onRemovePress: (index: number) => void;
  style?: ViewStyle;
}> = ({interest, index, onRemovePress, style}) => {
  return (
    <View style={[styles.interestWrapper, style]}>
      <Text style={styles.interestText}>{interest}</Text>
      <TouchableOpacity
        style={styles.interestIconWrapper}
        onPress={() => onRemovePress(index)}>
        <Fontisto name="rocket" size={19} color={COLORS.red1} />
      </TouchableOpacity>
    </View>
  );
};

export default InterestItem;

const styles = StyleSheet.create({
  interestWrapper: {
    height: 32,
    paddingRight: 36,
    paddingLeft: 29,
    borderRadius: 19,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.gray2,
  },
  interestText: {
    fontFamily: M_MEDIUM,
    color: COLORS.black1,
    fontSize: 12,
  },
  interestIconWrapper: {
    position: 'absolute',
    right: 3,
    top: -4,
    padding: 10,
  },
});
