import React from 'react';
import {View, TextInput, StyleSheet, Text} from 'react-native';

interface Props {
  value: string;
  label: string;
  onChangeText: (text: string) => void;
  textInput: string;
}

const Input = (props: Props) => {
  const {onChangeText, textInput} = props;
  return (
    <View>
      <Text style={styles.label}>{props.label}</Text>
      <TextInput
        value={textInput}
        style={styles.input}
        onChangeText={onChangeText}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  input: {
    width: 330,
    height: 50,
    borderWidth: 0.5,
    borderColor: '#C4C4C4',
    color: 'black',
    marginBottom: 20,
    borderRadius: 4,
  },
  label: {
    color: '#293961',
    fontSize: 16,
    fontWeight: '400',
    marginBottom: 5,
  },
});
