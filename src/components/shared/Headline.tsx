import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Svgicon from './SvgIcon';

interface HeadlineProps {
  text: string;
}

const Headline = (props: HeadlineProps) => {
  return (
    <View style={styles.headlineContainer}>
      <View style={styles.arrow}>
        <Svgicon name="shape" />
      </View>
      <View>
        <Text style={styles.text}>{props.text}</Text>
      </View>
    </View>
  );
};

export default Headline;

const styles = StyleSheet.create({
  headlineContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  arrow: {
    color: '#fff',
    width: 50,
    height: 50,
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#293961',
  },
});
