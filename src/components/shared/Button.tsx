import React from 'react';
import {Pressable, StyleSheet, Text, Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width - 32;

interface Props {
  title: string;
  backgroundColor: string;
  color: string;
  top: number;
  borderColor?: string;
  onPress(): void;
}

const ButtonComp = (props: Props) => {
  const {title, backgroundColor, color, top, borderColor, onPress} = props;

  return (
    <Pressable
      onPress={onPress}
      style={{...styles.container, backgroundColor, top, borderColor}}>
      <Text style={{...styles.text, color}}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: '#293961',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    height: 48,
    width: windowWidth,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ButtonComp;
