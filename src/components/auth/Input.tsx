import React from 'react';
import {
  Dimensions,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import {COLORS1} from '../../services/colors.service';
import {WS_MEDIUM} from '../../services/fonts.service';

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
  placeholder?: string;
}> = ({
  textInputProps,
  inputContainerStyle,
  mainContainerStyle,
  errorStyle,
  value,
  placeholder,
  onChangeText,
}) => {
  return (
    <View style={mainContainerStyle}>
      <View
        style={[
          styles.container,
          inputContainerStyle,
          showError && styles.errorBorder,
        ]}>
        <TextInput
          style={styles.textInput}
          placeholderTextColor={COLORS1.white}
          maxLength={30}
          {...textInputProps}
          value={value}
          placeholder={placeholder}
          onChangeText={onChangeText}
        />
      </View>
      {showError ? (
        <Text style={[styles.errorText, errorStyle]}>some error text</Text>
      ) : null}
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 2,
    borderBottomColor: COLORS1.green1,
    paddingLeft: 3,
    paddingBottom: Platform.OS === 'ios' ? 10 : 0,
    paddingTop: Platform.OS === 'ios' ? 10 : 0,
  },
  textInput: {
    color: COLORS1.white,
    fontSize: 15,
    fontFamily: WS_MEDIUM,
    width: Dimensions.get('window').width - 123,
  },
  errorText: {
    marginTop: 8,
    marginLeft: 24,
  },
  label: {
    fontSize: 15,
    color: COLORS1.white,
  },
  errorBorder: {
    borderBottomColor: COLORS1.red,
  },
});
