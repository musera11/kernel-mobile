import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import {COLORS1} from '../../services/colors.service';
import {RS_MEDIUM} from '../../services/fonts.service';
import SvgIcon from '../shared/SvgIcon';

const EthosFooter: React.FC<{
  theme?: 'light' | 'dark' | undefined;
  onNext: Function;
  onBack: Function;
  containerStyle?: ViewStyle;
  disableNext?: boolean;
}> = ({theme, onNext, onBack, containerStyle, disableNext}) => {
  const next = () => {
    onNext();
  };

  const back = () => {
    onBack();
  };

  return (
    <View style={[styles.container, containerStyle]}>
      <TouchableOpacity
        style={[
          styles.backButton,
          {borderColor: theme === 'light' ? COLORS1.white : COLORS1.gray2},
        ]}
        onPress={back}>
        <SvgIcon name={theme === 'light' ? 'whiteBack' : 'blackBack'} />
        <Text
          style={[
            styles.backText,
            {color: theme === 'light' ? COLORS1.white : COLORS1.gray3},
          ]}>
          BACK
        </Text>
      </TouchableOpacity>
      <View />
      <TouchableOpacity
        disabled={disableNext}
        style={[
          styles.nextButton,
          {borderColor: theme === 'light' ? COLORS1.white : COLORS1.gray2},
        ]}
        onPress={next}>
        <Text
          style={[
            styles.buttonText,
            {color: theme === 'light' ? COLORS1.white : COLORS1.gray3},
          ]}>
          NEXT
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default EthosFooter;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 31,
    paddingRight: 23,
  },
  nextButton: {
    width: 123,
    height: 52,
    borderRadius: 12,
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backButton: {
    height: 46,
    width: 46,
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 15,
    fontFamily: RS_MEDIUM,
  },
  backText: {
    fontSize: 15,
    fontFamily: RS_MEDIUM,
    marginLeft: 6,
  },
});
