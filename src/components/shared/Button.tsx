import React from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';

interface Props {
  title: string;
  backgroundColor: string;
  color: string;
  top: number;
  borderColor?: string;
}

const ButtonComp = (props: Props) => {
  const {title, backgroundColor, color, top, borderColor} = props;

  return (
    <Pressable style={{...styles.container, backgroundColor, top, borderColor}}>
      <Text style={{...styles.text, color}}>
        {title}
      </Text>
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
    width: 288,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ButtonComp;
