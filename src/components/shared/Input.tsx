import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

interface Props {
  value: string;
  onChangeText: (text: string) => void;
  textInput: string;
}

const Input = (props: Props) => {
  const {onChangeText, textInput} = props;
  return (
    <View>
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
    width: 100,
    height: 50,
    borderWidth: 1,
    borderColor: 'black',
    color: 'black',
  },
});
