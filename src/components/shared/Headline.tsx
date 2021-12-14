import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import Svgicon from './SvgIcon';

interface HeadlineProps {
  text: string;
}

const Headline = (props: HeadlineProps) => {
  const navigation = useNavigation();

  return (
    <View style={styles.headlineContainer}>
      <TouchableOpacity
        style={styles.arrow}
        onPress={() => navigation.goBack()}>
        <Svgicon name="shape" />
      </TouchableOpacity>
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
