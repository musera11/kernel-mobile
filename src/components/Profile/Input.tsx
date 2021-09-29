import React from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {COLORS} from '../../services/colors.service';
import {M_LIGHT, M_SEMI_BOLD} from '../../services/fonts.service';

const showError = false;

const Input: React.FC<{
  value: string;
  onChangeText: (text: string) => any;
  label?: string;
  textInputProps?: TextInputProps;
  inputContainerStyle?: ViewStyle;
  mainContainerStyle?: ViewStyle;
  labelStyle?: TextStyle;
  errorStyle?: TextStyle;
}> = ({
  label,
  textInputProps,
  inputContainerStyle,
  mainContainerStyle,
  labelStyle,
  errorStyle,
  value,
  onChangeText,
}) => {
  return (
    <View style={mainContainerStyle}>
      <Text style={[styles.label, labelStyle]}>{label}</Text>
      <View
        style={[
          styles.container,
          inputContainerStyle,
          showError && styles.errorBorder,
        ]}>
        <View style={styles.inputWrapper}>
          <Fontisto
            name="rocket"
            size={17}
            color={COLORS.red1}
            style={styles.leftIcon}
          />
          <TextInput
            style={styles.textInput}
            placeholderTextColor={COLORS.black1}
            maxLength={30}
            {...textInputProps}
            value={value}
            onChangeText={onChangeText}
          />
          <Fontisto
            name="rocket"
            size={17}
            color={COLORS.red1}
            style={styles.rightIcon}
          />
        </View>
      </View>
      {showError ? (
        <Text style={[styles.errorText, errorStyle]}>some error text</Text>
      ) : (
        // eslint-disable-next-line react/self-closing-comp
        <Text></Text>
      )}
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    height: 56,
    backgroundColor: COLORS.white1,
    borderRadius: 28,
    shadowColor: COLORS.black2,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    flexGrow: 1,
  },
  textInput: {
    color: COLORS.black1,
    fontFamily: M_SEMI_BOLD,
    fontSize: 18,
    width: Dimensions.get('window').width - 123,
  },
  leftIcon: {
    marginLeft: 22,
    marginRight: 12,
  },
  rightIcon: {
    marginLeft: 12,
    marginRight: 20,
  },
  errorText: {
    marginTop: 8,
    fontFamily: M_LIGHT,
    color: COLORS.red2,
    marginLeft: 24,
  },
  label: {
    fontFamily: M_SEMI_BOLD,
    fontSize: 16,
    color: COLORS.black1,
    marginBottom: 10,
  },
  errorBorder: {
    borderWidth: 1,
    borderColor: COLORS.red2,
  },
});
